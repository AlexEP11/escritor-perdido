"use client";
import { GalleryImage } from "@/interfaces";
import { useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";

interface Props {
    results: GalleryImage[];
}

export const GaleriaList = ({ results }: Props) => {
    const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    const handleImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    };

    return (
        <section className="max-w-screen mx-auto px-4 py-10">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {results.map((photo) => (
                    <div
                        key={`${photo.title + photo.description}`}
                        className="relative group overflow-hidden rounded-2xl shadow-lg"
                    >
                        <Image
                            src={photo.image}
                            alt={photo.title}
                            width={500}
                            height={360}
                            className="object-cover w-full h-[360px] group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => {
                                setLoading(true);
                                setSelectedPhoto(photo);
                            }}
                        />

                        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                            <h3 className="text-white text-lg font-bold w-2/3 break-words">
                                {photo.title}
                            </h3>
                            <p className="text-white font-semibold text-xs">
                                {new Date(photo.publish).toLocaleDateString()}
                            </p>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4 rounded-b-2xl">
                            <p className="text-white text-sm font-bold italic">
                                {photo.author}
                            </p>
                            <p className="text-white text-sm line-clamp-3 break-words mt-1">
                                {photo.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedPhoto && (
                <div
                    onClick={() => setSelectedPhoto(null)}
                    className="fixed inset-0 z-70 bg-black/80 flex items-center justify-center cursor-pointer px-5"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-6xl w-full max-h-[95vh] flex justify-center items-center"
                    >
                        <div className="relative">
                            {loading && (
                                <div className="absolute inset-0 z-80 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-lg">
                                    <CircularProgress size={80} color="info" />
                                </div>
                            )}
                            <Image
                                src={selectedPhoto.image}
                                alt={selectedPhoto.title}
                                width={1280}
                                height={1280}
                                className="max-h-[95vh] w-auto object-contain rounded-lg"
                                onLoadingComplete={handleImageLoad}
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white rounded-b-lg">
                                <h2 className="text-2xl font-bold">
                                    {selectedPhoto.title}
                                </h2>
                                <p className="text-sm font-semibold mt-1">
                                    Autor: {selectedPhoto.author}
                                </p>
                                <div className="flex items-center w-full justify-between">
                                    <p className="text-white text-sm line-clamp-3 break-words mt-1 w-4/5">
                                        {selectedPhoto.description}
                                    </p>

                                    <p className="text-sm italic mt-1">
                                        {new Date(
                                            selectedPhoto.publish
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
