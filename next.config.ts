import type { NextConfig } from "next";

const __digicdn_js_challenge = "ff31e5b4156f722509e8b1187e5b7500a0d9ac08";

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
