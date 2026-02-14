import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Serve root with the same route as patrice-hero (same layout + page)
        {
          source: "/",
          destination: "/accessibility/sections/patrice-hero",
        },
      ],
    };
  },
};

export default nextConfig;
