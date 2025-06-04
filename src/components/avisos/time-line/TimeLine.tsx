import { Notice } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface Props {
    results: Notice[];
}

export const TimeLine = ({ results }: Props) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-full max-w-7xl">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 rounded-full  border-gray-300"></div>

                {results.map((notice, index) => {
                    const isLeft = index % 2 === 0;
                    const { title, content, publish, type } = notice;
                    const { color, icon_url, name } = type;
                    return (
                        <div
                            key={index}
                            className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full px-5 ${
                                isLeft ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                            <div className="hidden md:block w-5/12"></div>

                            <div
                                style={{ backgroundColor: color }}
                                className="z-10 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow-md"
                            >
                                <Image
                                    src={icon_url}
                                    alt={name}
                                    width={20}
                                    height={20}
                                    style={{ backgroundColor: color }}
                                    className="object-cover rounded-full "
                                />
                            </div>

                            <div className="bg-white border border-gray-100 rounded-lg shadow-md w-full md:w-5/12 mt-5 md:mt-0 p-4 hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300">
                                <h3
                                    style={{ color }}
                                    className="font-bold text-gray-800 text-lg break-words line-clamp-3 mb-2"
                                >
                                    {title}
                                </h3>
                                <span className="text-sm text-neutral-700 antialiased leading-relaxed">
                                    {content}
                                </span>
                                <div className="flex items-center justify-end mt-2">
                                    <p
                                        style={{ color }}
                                        className="font-semibold italic text-sm"
                                    >
                                        {new Date(publish).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
