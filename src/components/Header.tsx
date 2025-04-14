import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="relative h-[540px] sm:h-[640px] md:h-[768px] lg:h-[860px] xl:h-[960px] w-full overflow-hidden">
            <Navbar />
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                <h1 className="text-4xl md:text-6xl title-cabin uppercase text-white drop-shadow-lg">
                    En busca del Escritor Perdido
                </h1>
                <Link
                    href="/contacto"
                    className="inline-block mt-10 text-xs sm:text-lg md:text-base text-black font-semibold rounded-xl drop-shadow-md uppercase px-6 py-3 bg-mayonesa hover:bg-mayonesa-bajo transition-all duration-300"
                >
                    ¿Quieres conocer más?
                </Link>
            </div>

            <Carousel />
        </header>
    );
};
