import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {  
        domains: ['dkstatics-public.digikala.com','www.digikala.com','localhost']
      },
      async rewrites() {
        return [
          {
            source: '/products/v1/:path*',  
            destination: 'https://api.digikala.com/v1/search/?__digicdn_js_challenge=60d84cac459119501e88e343d7bc133e25bfef0d&path=:path*'  
          },
        ]
      },
};

export default nextConfig;
