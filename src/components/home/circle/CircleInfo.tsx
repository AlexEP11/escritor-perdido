"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { CircleInfoI } from "@/interfaces";
import { CircleModal } from "./CircleModal";
import { Circle } from "./Circle";
import Image from "next/image";

export const CircleInfo = ({
    path,
    color = "#FFFFFF",
    title,
    info,
}: CircleInfoI) => {
    const [click, setClick] = useState<boolean | null>(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex flex-col items-center"
        >
            <p className="text-center text-sm font-bold mb-2 max-w-[140px]">
                {title}
            </p>
            <div
                className="relative hover:cursor-pointer hover:scale-105 hover:rotate-12 transition-all duration-300"
                onClick={() => setClick(true)}
            >
                <Circle color={color} />
                {path && (
                    <div className="absolute inset-0 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                        <Image
                            src={path}
                            alt={title}
                            width={60}
                            height={60}
                            className="w-30 h-30"
                        />
                    </div>
                )}
            </div>
            <AnimatePresence>
                {click !== null && (
                    <CircleModal
                        info={info}
                        setClick={setClick}
                        title={title}
                        path={path}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};
