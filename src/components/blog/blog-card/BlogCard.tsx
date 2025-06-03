"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import he from "he";
import { extractCleanSlug } from "@/api";
import type { CardInfo } from "@/interfaces";

interface Props {
    cardInfo: CardInfo;
}

export const BlogCard = ({ cardInfo }: Props) => {
    const { title, description, author, cover_image, url, publish } = cardInfo;
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
    });

    const slug = extractCleanSlug(url);

    return (
        <Link href={`/blog/post/${slug}`} passHref>
            <motion.article
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col overflow-hidden rounded-xl shadow-md bg-white max-w-sm hover:scale-110 hover:cursor-pointer hover:rotate-1 hover:shadow-xl transition-all duration-300 min-w-[350px] sm:min-w-sm"
            >
                <figure>
                    <Image
                        src={cover_image || "/carousel/blog/image1.webp"}
                        alt="Imagen blog"
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                    />
                    <figcaption className="flex flex-col justify-between p-4 space-y-2 min-h-56">
                        <h3 className="text-xl title-chelsea line-clamp-2 break-words">
                            {title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 break-words">
                            {he.decode(description)}
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                            <p className="font-bold">{author.split(" ")[0]}</p>
                            <p className="font-semibold">
                                {new Date(publish).toLocaleDateString()}
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </motion.article>
        </Link>
    );
};
