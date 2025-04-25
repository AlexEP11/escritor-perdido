import { Carousel } from "@/components";
import { imagesBlog, imagesHome } from "@/data";

export const OurHistorySection = () => {
    return (
        <article className="bg-lavanda py-16 sm:py-20 ">
            <h2 className="uppercase text-5xl title-chelsea text-center">
                Nuestra Historia
            </h2>
            <section className="max-w-[1440px] mx-auto">
                <div className="text-justify mt-16 justify-items-center grid grid-cols-1 gap-y-10 lg:gap-0 lg:grid-cols-3 px-4">
                    <div className="col-span-1 flex justify-center items-center sm:justify-start hover:scale-110 duration-300 transition-all">
                        <Carousel
                            width={350}
                            height={350}
                            rounded={"100%"}
                            images={[...imagesBlog, ...imagesHome]}
                        />
                    </div>
                    <div className="col-span-2">
                        <p>
                            En marzo de 2020, frente al cierre de escuelas en
                            México, surgió una necesidad urgente: reinventar la
                            educación para los más pequeños. Fue entonces cuando
                            nació &quot;En busca del escritor perdido&quot;, una
                            propuesta educativa innovadora creada por la maestra
                            Diana Laura Moreno y guiada por la doctora Dalila
                            del Toro Rodríguez.
                        </p>
                        <p>
                            Nuestro proyecto se centra en el poder de los
                            cuentos como herramienta pedagógica, utilizando el
                            modelo de 8 pasos propuesto por Ethel Krauze en el
                            Seminario de investigación didáctica &quot;Teoría y
                            práctica de la creación literaria&quot; (CIDHEM,
                            2012) - documentado en{" "}
                            <em>
                                Caminito de los cuentos I: Las hadas existen...
                                déjame contarte
                            </em>{" "}
                            (Martínez Miramontes et al., 2014, p. 14). Este
                            método fomenta la creación literaria en niños
                            preescolares mediante: creación de personajes,
                            escenarios, conflictos y soluciones narrativas.
                        </p>
                        <p>
                            Desde entonces, hemos trabajado en escuelas rurales
                            y urbanas, obteniendo reconocimientos como la
                            mención honorífica en el concurso &quot;Mexicanos
                            Primero Jalisco&quot;. Hoy, trascendemos las aulas
                            para ofrecer talleres lúdicos, formación docente y
                            materiales didácticos que transforman la manera de
                            aprender y enseñar.
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
};
