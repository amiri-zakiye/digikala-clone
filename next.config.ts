import type { NextConfig } from "next";

const __digicdn_js_challenge = "24127110b24f73fd18b97f7e4e2138ab8669185c";

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
      {
        source: "/comments/:productId",
        destination: `https://api.digikala.com/v1/rate-review/products/:productId/?__digicdn_js_challenge=${__digicdn_js_challenge}`,
      },
    ];
  },
};

export default nextConfig;
