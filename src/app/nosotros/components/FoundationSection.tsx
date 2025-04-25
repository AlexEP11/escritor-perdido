import Image from "next/image";

export const FoundationSection = () => {
    return (
        <>
            <h2 className="text-4xl uppercase mt-20 font-bold title-chelsea px-4 text-center">
                Equipo Fundador
            </h2>
            <div className="max-w-[1440px] px-4 mx-auto mt-10 flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-x-50">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-sm w-full transition hover:shadow-xl">
                    <Image
                        src="/Dalila.webp"
                        alt="Dra. Dalila del Toro Rodríguez"
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover object-top"
                    />
                    <div className="p-8 text-center">
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">
                            Dra. Dalila del Toro Rodríguez
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Especialista en educación preescolar, autora y
                            diseñadora de proyectos pedagógicos.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-sm w-full transition hover:shadow-xl">
                    <Image
                        src="/Diana.webp"
                        alt="Mtra. Diana Laura Moreno"
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover object-top"
                    />
                    <div className="p-6 text-center">
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">
                            Mtra. Diana Laura Moreno
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Docente apasionada por la infancia y la imaginación,
                            con una profunda vocación por acompañar y enseñar a
                            los niños.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
