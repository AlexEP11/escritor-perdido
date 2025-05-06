"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: Recbir los props de usuario, fecha, imagen, titulo y descripcion
interface Props {
    id: number;
}

export const BlogCard = ({ id }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
    });

    return (
        <Link href={`/blog/post/${id.toString()}`}>
            <motion.article
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="flex flex-col overflow-hidden rounded-xl shadow-md bg-white max-w-sm hover:scale-110 hover:cursor-pointer hover:rotate-1 hover:shadow-xl transition-all duration-300"
            >
                <figure>
                    <Image
                        src="/carousel/blog/image1.webp"
                        alt="Imagen blog"
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                    />
                    <figcaption className="p-4 space-y-2">
                        <h3 className="text-xl title-chelsea line-clamp-2 break-words">
                            Programación Matemática
                        </h3>
                        <p className="text-gray-600 line-clamp-3 break-words">
                            Procesando matemáticas, una programación desde el
                            aula de Educación Infantil.
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                            <p className="font-bold">Fernando</p>
                            <p className="font-semibold">Fecha</p>
                        </div>
                    </figcaption>
                </figure>
            </motion.article>
        </Link>
    );
};
