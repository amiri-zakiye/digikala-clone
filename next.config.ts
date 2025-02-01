import type { NextConfig } from "next";

// const __digicdn_js_challenge = "24127110b24f73fd18b97f7e4e2138ab8669185c";

const nextConfig: NextConfig = {
  // output: "export",  // <=== enables static exports
  // reactStrictMode: true,
  
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["dkstatics-public.digikala.com", "www.digikala.com", "localhost"],
  },
  
};

export default nextConfig;
