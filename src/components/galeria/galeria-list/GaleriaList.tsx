import { GalleryImage } from "@/interfaces";
import Image from "next/image";

interface Props {
    results: GalleryImage[];
}

export const GaleriaList = ({ results }: Props) => {
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
                            className="object-cover w-full h-[360px] group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Título y fecha arriba */}
                        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                            <h3 className="text-white text-lg font-bold w-2/3 break-words">
                                {photo.title}
                            </h3>
                            <p className="text-white font-semibold text-xs">
                                {new Date(photo.publish).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Autor y descripción abajo */}
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
        </section>
    );
};
