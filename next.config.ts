import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  images: {
    domains: ["https://lh3.googleusercontent.com/"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
