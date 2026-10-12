import React, { useEffect, useRef, useState } from 'react';
import { DONATION_CONFIG } from '../utils/constants';
import { loadPaystack } from '../utils/paystack';

const formatAmount = (amount: number) => new Intl.NumberFormat('en-NG', {
  style: 'currency', currency: 'NGN', maximumFractionDigits: 2,
}).format(amount);

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState(String(DONATION_CONFIG.defaultAmount));
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const locked = useRef(false);
  const mounted = useRef(true);
  const key = DONATION_CONFIG.publicKey;
  const configured = /^pk_(live|test)_[a-zA-Z0-9]+$/.test(key);
  const hostedUrl = DONATION_CONFIG.paystackUrl.trim();
  const hasHostedPage = /^https:\/\/paystack\.(com|shop)\/pay\/[a-zA-Z0-9_-]+$/.test(hostedUrl)
    && !hostedUrl.endsWith('/your-link');

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (locked.current || !configured) return;
    const naira = Number(amount);
    if (!/^\d+(\.\d{1,2})?$/.test(amount) || !Number.isFinite(naira)
      || naira < DONATION_CONFIG.minAmount || naira > DONATION_CONFIG.maxAmount) {
      setMessage(`Choose an amount between ${formatAmount(DONATION_CONFIG.minAmount)} and ${formatAmount(DONATION_CONFIG.maxAmount)}, with up to two decimal places.`);
      return;
    }
    locked.current = true;
    setBusy(true);
    setMessage('');
    const finish = (text: string) => {
      locked.current = false;
      if (mounted.current) { setBusy(false); setMessage(text); }
    };
    try {
      const Paystack = await loadPaystack();
      if (!mounted.current) { locked.current = false; return; }
      new Paystack().newTransaction({
        key, email: email.trim(), amount: Math.round(naira * 100), currency: 'NGN',
        reference: `OH-${crypto.randomUUID()}`,
        onSuccess: (transaction) => finish(`Thank you for supporting Orange Hat! Please check your email for your Paystack payment receipt. Payment reference: ${transaction.reference}.`),
        onCancel: () => finish('Checkout closed. You can try again when you are ready.'),
        onError: () => finish('Checkout could not open. Please try again or use the Paystack payment page below.'),
      });
    } catch (error) {
      finish(error instanceof Error ? error.message : 'Could not open checkout. Please try again.');
    }
  };

  if (!configured) return (
    <div className="donation-form contact-route-form">
      <h3>Make a donation</h3>
      {hasHostedPage ? <>
        <p>Choose your donation amount and pay securely on Paystack.</p>
        <a href={hostedUrl} className="form-submit donation-checkout-link">Donate with Paystack &rarr;</a>
      </> : <p>Please email <a href="mailto:orangehatjoy@gmail.com">orangehatjoy@gmail.com</a> to support Orange Hat.</p>}
    </div>
  );

  return (
    <form onSubmit={submit} className="donation-form contact-route-form" aria-busy={busy}>
      <h3>Make a donation</h3>
      <p>Choose an amount. Every gift helps children and families grow.</p>
      {key.startsWith('pk_test_') && <p role="status">Test checkout: no real money will be collected.</p>}
      <fieldset disabled={busy}>
        <legend>Choose a donation amount (NGN)</legend>
        <div className="donation-presets">
          {[1000, 5000, 10000, 25000].map((preset) => (
            <button key={preset} type="button" aria-pressed={Number(amount) === preset}
              onClick={() => { setAmount(String(preset)); setMessage(''); }}>
              {formatAmount(preset)}
            </button>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="donation-amount">Your amount (NGN)</label>
          <input id="donation-amount" type="number" inputMode="decimal" min={DONATION_CONFIG.minAmount}
            max={DONATION_CONFIG.maxAmount} step="0.01" required value={amount}
            onChange={(event) => setAmount(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="donation-email">Email for your receipt</label>
          <input id="donation-email" type="email" autoComplete="email" required value={email}
            placeholder="you@example.com" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <button type="submit" className="form-submit">{busy ? 'Opening checkout…' : 'Donate with Paystack →'}</button>
      </fieldset>
      <p className="donation-note">One-time donation. Your payment details are handled securely by Paystack.</p>
      <p role="status" aria-live="polite">{message}</p>
      {hasHostedPage && <a href={hostedUrl}>Prefer the Paystack payment page?</a>}
    </form>
  );
};

export default DonationForm;
