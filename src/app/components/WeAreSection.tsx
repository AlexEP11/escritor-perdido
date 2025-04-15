import Image from "next/image";

export const WeAreSection = () => {
    return (
        <article className="bg-azul py-16 sm:py-20 ">
            <h2 className="uppercase text-5xl title-chelsea text-center">
                ¿Quiénes somos?
            </h2>
            <section className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 px-4">
                <div className="col-span-2">
                    <p className="text-justify">
                        Somos un equipo de educadores apasionados por la
                        enseñanza y la alfabetización infantil. Basamos nuestra
                        metodología en el uso del cuento como recurso didáctico
                        para fomentar la lectura, la escritura y el pensamiento
                        matemático de manera creativa e interdisciplinaria.
                        Nuestro proyecto, &quot;En busca del escritor
                        perdido&quot;, ha sido implementado con éxito en
                        diversas escuelas y reconocido por su impacto educativo.
                    </p>
                    <p className="text-justify">
                        Buscamos inspirar a los niños a construir su propio
                        aprendizaje mediante la exploración y la creación
                        literaria.
                    </p>
                    <p className="text-justify">
                        Cada sesión es una aventura en la que los estudiantes no
                        solo leen o escriben, sino que también interpretan,
                        resuelven problemas y colaboran con sus compañeros. A
                        través de personajes, tramas y escenarios diseñados
                        especialmente para ellos, los niños se convierten en
                        protagonistas activos de su proceso de aprendizaje.
                    </p>
                </div>
                <div className="flex items-center justify-center sm:col-span-1">
                    <Image
                        src="/thinking-man.png"
                        alt="Figura pensativa"
                        width={160}
                        height={250}
                        className="object-contain"
                    />
                </div>
            </section>
        </article>
    );
};
