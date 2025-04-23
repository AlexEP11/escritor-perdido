"use client";

import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
    title: string;
    button?: boolean;
    images: string[];
}

export const Header = ({ title, button = true, images = [] }: Props) => {
    return (
        <header className="relative h-[850px] md:h-[1024px] xl:h-[1024px] w-full overflow-hidden">
            <Navbar />
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl title-cabin uppercase text-white drop-shadow-lg"
                >
                    {title}
                </motion.h1>
                <Link href="/contacto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className={` ${
                            button === false
                                ? "hidden"
                                : "inline-block mt-10 text-xs sm:text-lg md:text-base text-black font-semibold rounded-xl drop-shadow-md uppercase px-6 py-3 bg-mayonesa hover:bg-mayonesa-bajo transition-all duration-300"
                        }`}
                    >
                        ¿Quieres conocer más?
                    </motion.div>
                </Link>
            </div>

            <Carousel images={images} />
        </header>
    );
};
