import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
      {
        pathname: "/projects/laviebel/lavi-folder.png",
        search: "?v=20260818",
      },
    ],
  },
};

export default nextConfig;
