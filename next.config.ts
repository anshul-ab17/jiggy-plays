import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
   allowedDevOrigins:
    ['http://172.19.0.1', // add the IP / origin you are accessing from
     'http://localhost:3000', // optional, usually allowed by default,
     '192.168.29.13', '192.168.29.14']
};

export default nextConfig;
