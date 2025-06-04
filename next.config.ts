import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    compress: true,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: `${process.env.NEXT_PUBLIC_SERVER}`,
            },
        ],
    },
};

export default nextConfig;
