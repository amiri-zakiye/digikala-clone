import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {  
        domains: ['dkstatics-public.digikala.com','www.digikala.com','localhost']
      },
      async rewrites() {
        return [
          {
            source: '/products/v1/:path*',  
            destination: 'https://api.digikala.com/v1/search/?__digicdn_js_challenge=5070ce25ddfbbd7bbd55dea5c19628dfe59ec6e0&path=:path*'  
          },
        ]
      },
};

export default nextConfig;
