"use client";

import Image from "next/image";
import { Circle } from "./Circle";
import { useState } from "react";
import { CircleInfoI } from "../types";
import { CircleModal } from "./CircleModal";

export const CircleInfo = ({
    path,
    color = "#FFFFFF",
    title,
    info,
}: CircleInfoI) => {
    const [click, setClick] = useState<boolean | null>(null);

    return (
        <div className="flex flex-col items-center">
            <p className="text-center text-sm font-bold mb-2 max-w-[140px]">
                {title}
            </p>
            <div
                className="relative hover:cursor-pointer hover:scale-105 hover:rotate-12 transition-all duration-300"
                onClick={() => setClick(true)}
            >
                <Circle color={color} />
                {path && (
                    <div className="absolute inset-0 flex items-center justify-center  hover:scale-125 transition-transform duration-300">
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
            {click !== null && (
                <CircleModal
                    info={info}
                    setClick={setClick}
                    title={title}
                    path={path}
                />
            )}
        </div>
    );
};
