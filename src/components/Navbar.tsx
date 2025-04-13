import Link from "next/link";
import { Logo } from "./Logo";
import { navItems } from "@/data";

export const Navbar = () => {
    return (
        // TODO: Hacer resposive la barra de navegacion
        // TODO: Hacer fondo blanco al scrollear
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-transparent">
            <Logo />
            <nav className="flex justify-evenly items-center gap-10 ">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className="group relative text-white font-semibold px-5 py-2 transition-all duration-300"
                    >
                        {item.title}
                        <span className="absolute  left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-azul to-azul-bajo transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                    </Link>
                ))}
            </nav>
        </div>
    );
};
