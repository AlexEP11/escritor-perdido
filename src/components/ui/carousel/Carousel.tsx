"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
    images: string[];
    width?: string | number;
    height?: string | number;
    rounded?: string | number;
}

export const Carousel = ({ images = [], width, height, rounded }: Props) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="relative overflow-hidden"
            style={{
                width: width || "100%",
                height: height || "100%",
                borderRadius: rounded ?? undefined,
            }}
        >
            <div className="absolute inset-0 bg-black/50 z-5" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div
                    className="flex transition-transform duration-1000 ease-in-out h-full"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div key={index} className="min-w-full h-full relative">
                            <Image
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                fill
                                quality={80}
                                priority
                                className="object-cover object-center"
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
