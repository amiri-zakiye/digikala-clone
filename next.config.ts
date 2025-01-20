import type { NextConfig } from "next";

const __digicdn_js_challenge = "f8d3301ae14bde3d7dd6d8fdaa2227b1a2e8309f";

const nextConfig: NextConfig = {
  images: {
    domains: ["dkstatics-public.digikala.com", "www.digikala.com", "localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/products/v1/:path*",
        destination: `https://api.digikala.com/v1/search/?__digicdn_js_challenge=${__digicdn_js_challenge}&path=:path*`,
      },
      {
        source: "/product/v2/:id",
        destination: `https://api.digikala.com/v2/product/:id/?__digicdn_js_challenge=${__digicdn_js_challenge}`,
      },
    ];
  },
};

export default nextConfig;
