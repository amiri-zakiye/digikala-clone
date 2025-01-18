import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {  
        domains: ['dkstatics-public.digikala.com','www.digikala.com','localhost']
      },
      async rewrites() {
        return [
          {
            source: '/products/v1/:path*',  
            destination: 'https://api.digikala.com/v1/search/?__digicdn_js_challenge=94025a3378e8f9b04aff40d0ec6173bf08013fda&path=:path*'  
          },
        ]
      },
};

export default nextConfig;
