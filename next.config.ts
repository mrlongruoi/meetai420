import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/meetings",
  //       permanent: true,
  //     }
  //   ]
  // }
};

export default nextConfig;
