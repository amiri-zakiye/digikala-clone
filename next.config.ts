import type { NextConfig } from "next";

const __digicdn_js_challenge = "72cb04557a09468d25aee5662dc86da3a99b0aa4";

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
