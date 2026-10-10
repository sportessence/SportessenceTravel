import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.ascsport.it",
      },
      {
        protocol: "https",
        hostname: "centrosp.it",
      },
    ],
  },
};

export default nextConfig;
