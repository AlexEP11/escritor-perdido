"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Props {
    color: string;
    image: string;
    title: string;
    description: string;
}

export const ValuesCard = ({
    image,
    title,
    description,
    color = "white",
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative border max-w-80 border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 duration-300 transition-all pt-[75px] px-4 pb-4 text-center ${color}`}
        >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg border-4 border-white">
                    <Image
                        src={image}
                        alt={`Imagen de ${title}`}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <h3 className="text-xl font-bold mt-5">{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
};
