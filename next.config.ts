import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {  
        domains: ['dkstatics-public.digikala.com','www.digikala.com','localhost']
      },
      async rewrites() {
        return [
          {
            source: '/products/v1/:path*',  
            destination: 'https://api.digikala.com/v1/search/?__digicdn_js_challenge=4214eff85d3e8072c6ef04010e2753bfe48a46a3&path=:path*'  
          },
        ]
      },
};

export default nextConfig;
