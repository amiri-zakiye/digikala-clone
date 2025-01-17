import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {  
        domains: ['dkstatics-public.digikala.com','www.digikala.com','localhost']
      },
      async rewrites() {
        return [
          {
            source: '/products/v1',
            destination: 'https://api.digikala.com/v1/search/?__digicdn_js_challenge=aa6cf02cd4f3a13f799967bf022380307b4077bd'
          },
        ]
      },
};

export default nextConfig;
