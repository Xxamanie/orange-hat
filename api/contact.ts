import nodemailer from 'nodemailer';

type VercelRequest = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
};

function sanitize(input: unknown): string {
  return typeof input === 'string' ? input.trim() : '';
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039;');
}

function getClientIp(req: VercelRequest): string {
  const xf = req.headers['x-forwarded-for'];
  if (typeof xf === 'string' && xf.length > 0) return xf.split(',')[0].trim();
  const xr = req.headers['x-real-ip'];
  return (typeof xr === 'string' && xr) || 'unknown';
}

const rate = new Map<string, { count: number; resetAt: number }>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  // Honeypot
  const body = (req.body ?? {}) as Record<string, unknown>;
  const honeypot = sanitize(body.hp);
  if (honeypot) {
    res.status(400).json({ success: false, message: 'Bad request' });
    return;
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const max = 5;

  const existing = rate.get(ip);
  if (!existing || existing.resetAt <= now) {
    rate.set(ip, { count: 1, resetAt: now + windowMs });
  } else {
    existing.count += 1;
    if (existing.count > max) {
      res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
      return;
    }
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const interest = sanitize(body.interest);
  const message = sanitize(body.message);
  const phone = sanitize(body.phone);

  if (!name || name.length < 2) {
    res.status(400).json({ success: false, message: 'Name is required' });
    return;
  }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ success: false, message: 'A valid email is required' });
    return;
  }
  if (!message || message.length < 10) {
    res.status(400).json({ success: false, message: 'Message must be at least 10 characters' });
    return;
  }

  const to = process.env.CONTACT_EMAIL || 'info@orange-hat.org';
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || '465');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || 'true') === 'true';
  const smtpFrom = process.env.SMTP_FROM || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    res.status(500).json({ success: false, message: 'Email service not configured' });
    return;
  }

  const subject = interest ? `Contact: ${interest}` : 'Contact: New message';

  const plainText = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    interest ? `Interest: ${interest}` : null,
    '',
    message,
    '',
    `Sent: ${new Date().toISOString()}`,
    `IP: ${ip}`,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.4;">
      <h2 style="margin:0 0 12px 0;">${escapeHtml(subject)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      ${interest ? `<p><strong>Interest:</strong> ${escapeHtml(interest)}</p>` : ''}
      <hr/>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr/>
      <p style="color:#666; font-size:12px;">Sent: ${escapeHtml(new Date().toISOString())}<br/>IP: ${escapeHtml(ip)}</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to,
      subject,
      text: plainText,
      html,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: 'Sent' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Contact send failed:', err);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}

