type InstagramMediaNode = {
  id: string;
  media_type?: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' | 'REEL' | string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  caption?: string;
  timestamp?: string;
};

type GraphMediaResponse = {
  data?: InstagramMediaNode[];
  error?: {
    message?: string;
    type?: string;
    code?: number;
    fbtrace_id?: string;
  };
};

export default async function handler(req: { method?: string }, res: {
  status: (code: number) => { json: (data: unknown) => void };
  json: (data: unknown) => void;
}) {
  if (req.method && req.method !== 'GET') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN || process.env.META_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID || process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !userId) {
    res.status(200).json({
      success: false,
      posts: [],
      message: 'Instagram Graph API is not configured. Add INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID to your environment variables.',
    });
    return;
  }

  const count = Number(process.env.INSTAGRAM_MEDIA_COUNT || '6');
  const url = new URL(`https://graph.facebook.com/v20.0/${userId}/media`);
  url.searchParams.set('fields', 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp');
  url.searchParams.set('access_token', accessToken);
  url.searchParams.set('limit', String(Math.max(1, Math.min(count, 12))));

  try {
    const response = await fetch(url.toString(), {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    const payload = (await response.json()) as GraphMediaResponse;

    if (!response.ok || payload.error) {
      const message = payload.error?.message || `Instagram request failed with status ${response.status}`;
      throw new Error(message);
    }

    const posts = (payload.data ?? [])
      .filter((post) => post?.media_url || post?.thumbnail_url)
      .slice(0, count)
      .map((post) => ({
        id: post.id,
        shortcode: post.id,
        caption: post.caption || 'Orange Hat community moment',
        mediaUrl: post.media_url || post.thumbnail_url || '',
        thumbnailUrl: post.thumbnail_url || post.media_url || '',
        permalink: post.permalink || `https://www.instagram.com/` ,
        isVideo: ['VIDEO', 'REEL'].includes(post.media_type || ''),
      }));

    if (posts.length === 0) {
      res.status(200).json({
        success: true,
        posts: [],
        message: 'No public Instagram posts are currently available.',
      });
      return;
    }

    res.status(200).json({ success: true, posts });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to fetch Instagram media';
    res.status(200).json({
      success: false,
      posts: [],
      message,
    });
  }
}
