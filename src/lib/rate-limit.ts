import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/redis';
import { NextRequest } from 'next/server';

// Create a new ratelimiter, that allows 5 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, '10 s'),
});

// In your API route
export const POST = async (req: NextRequest) => {
  const ip = req.ip ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response('Too many requests', {
      status: 429,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // Your existing code here
};
