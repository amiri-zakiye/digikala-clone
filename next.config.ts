import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dkstatics-public.digikala.com", "www.digikala.com", "localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/products/v1/:path*",
        destination:
          "https://api.digikala.com/v1/search/?__digicdn_js_challenge=6f669c0d43435c3b720f39a9c3c9baf20af949dd&path=:path*",
      },
    ];
  },
};

export default nextConfig;
