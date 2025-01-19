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
          "https://api.digikala.com/v1/search/?__digicdn_js_challenge=024e4467e48b817f45318062606ea9069a4793aa&path=:path*",
      },
    ];
  },
};

export default nextConfig;
