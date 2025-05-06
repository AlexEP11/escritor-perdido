import Image from "next/image";

export const LiteraryCreationSection = () => {
    return (
        <article className="mt-16">
            <h2 className="uppercase text-5xl title-chelsea text-center">
                La Creación Literaria Como Camino Al Aprendizaje
            </h2>
            <section className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 px-4">
                <div className="flex items-center justify-center sm:col-span-1">
                    <Image
                        src="/home/books-dragon.png"
                        alt="Dragon leyendo un libro"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
                <div className="col-span-2 text-justify">
                    <p className="text-gray-800 leading-relaxed mb-6">
                        Nuestra estrategia pedagógica, basada en el modelo de 8
                        pasos propuesto por Ethel Krauze en el{" "}
                        <span className="font-semibold text-indigo-700 ">
                            Seminario de investigación didáctica &quot;Teoría y
                            práctica de la creación literaria&quot;{" "}
                        </span>
                        (CIDHEM, 2012) - documentado en el libro
                        <span className="italic text-indigo-800">
                            {" "}
                            Caminito de los cuentos I: Las hadas existen...
                            déjame contarte{" "}
                        </span>
                        (Martínez Miramontes et al., 2014, p. 14) - guía a los
                        niños en un proceso estructurado donde crean personajes,
                        construyen escenarios y resuelven conflictos a través de
                        la escritura.
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                        Este enfoque innovador transforma la alfabetización
                        inicial en una experiencia consciente y creativa, donde
                        el niño no solo adquiere habilidades de lectoescritura,
                        sino que descubre el poder transformador de la palabra
                        escrita.
                    </p>
                </div>
            </section>
        </article>
    );
};
