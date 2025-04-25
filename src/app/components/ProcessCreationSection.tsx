import Image from "next/image";
import { CircleInfo } from "./CircleInfo";
import { ArrowNormal } from "./ArrowNormal";
import React from "react";
import { ArrowFlip } from "./ArrowFlip";
import { circlesInfo } from "@/data";

export const ProcessCreationSection = () => {
    const renderElement = (
        type: "circle" | "arrow",
        index: number,
        direction?: "normal" | "flip"
    ) => {
        const data = circlesInfo[index];
        const baseClasses = "col-span-1 flex justify-center items-center";
        const arrowClasses =
            "hover:scale-105 transition-transform duration-300";

        return (
            <div
                key={`${type}-${index}`}
                className={`${baseClasses} ${
                    type === "arrow" ? arrowClasses : ""
                }`}
            >
                {type === "circle" ? (
                    <CircleInfo
                        color={data.color}
                        title={data.title}
                        path={data.path}
                        info={data.info}
                    />
                ) : direction === "normal" ? (
                    <ArrowNormal style={data.class} color={data.color} />
                ) : (
                    <ArrowFlip style={data.class} color={data.color} />
                )}
            </div>
        );
    };

    return (
        <main>
            <Image
                src="/wave.svg"
                alt="Wave decoration 1"
                width={100}
                height={100}
                className="w-full h-16 sm:h-48 object-cover rotate-180 scale-x-[-1]"
            />
            <h2 className="uppercase title-chelsea sm:p-20 p-6 bg-amarillo text-center sm:text-5xl text-2xl">
                Proceso de Literaturización y Creación Literaria
            </h2>
            <Image
                src="/wave.svg"
                alt="Wave decoration 2"
                width={100}
                height={100}
                className="w-full h-16 sm:h-48 object-cover"
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-11 sm:gap-4">
                {/* Primera fila */}
                {renderElement("circle", 0)}
                {renderElement("arrow", 0, "normal")}
                {renderElement("circle", 1)}
                {renderElement("arrow", 1, "flip")}

                {/* Segunda fila */}
                {renderElement("arrow", 2, "flip")}
                {renderElement("circle", 2)}
                {renderElement("arrow", 3, "normal")}
                {renderElement("circle", 3)}

                {/* Tercera fila */}
                {renderElement("circle", 4)}
                {renderElement("arrow", 4, "normal")}
                {renderElement("circle", 5)}
                {renderElement("arrow", 5, "flip")}

                {/* Cuarta fila */}
                <div className="col-span-1 hidden lg:block">
                    <ArrowNormal
                        style={circlesInfo[7].class}
                        color={circlesInfo[7].color}
                    />
                </div>
                {renderElement("circle", 7)}
                {renderElement("arrow", 6, "normal")}
                {renderElement("circle", 6)}
            </div>
        </main>
    );
};
