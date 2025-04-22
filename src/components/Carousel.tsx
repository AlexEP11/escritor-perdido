"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    images: string[];
}

export const Carousel = ({ images = [] }: Props) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
            <div className="absolute inset-0 bg-black/40 z-5" />
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
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
