import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    compress: true,
    images: {
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
