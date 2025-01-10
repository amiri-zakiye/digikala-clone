import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  target: 'https://api.digikala.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '',
  },
});

// export async function GET() {
//   return proxy(req, res, (result) => {
//     if (result instanceof Error) {
//       console.error('Proxy error:', result);
//       res.status(500).json({ error: 'Proxy error' });
//     }
//   });
// }

export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
