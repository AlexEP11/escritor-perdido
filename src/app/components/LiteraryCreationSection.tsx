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
                        src="/books-dragon.png"
                        alt="Dragon leyendo un libro"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
                <div className="col-span-2">
                    <p className="text-justify">
                        Nuestra estrategia, basada en el modelo pedagógico
                        propuesto por la escritora Ethel Krauze en su ensayo
                        “Literaturizar… para educar” (2012), publicado en la
                        revista Tamoanchan, guía a los niños en un proceso
                        estructurado de ocho pasos, en el que crean personajes,
                        construyen escenarios y resuelven conflictos a través de
                        la escritura.
                    </p>
                    <p className="text-justify">
                        Este enfoque convierte la alfabetización inicial en una
                        experiencia consciente, creativa e innovadora, donde el
                        niño no solo aprende a leer y escribir, sino que también
                        comprende el poder de la palabra escrita.
                    </p>
                </div>
            </section>
        </article>
    );
};
