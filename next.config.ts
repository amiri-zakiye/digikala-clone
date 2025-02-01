import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["dkstatics-public.digikala.com", "www.digikala.com", "localhost"],
  },
  
};

export default nextConfig;
