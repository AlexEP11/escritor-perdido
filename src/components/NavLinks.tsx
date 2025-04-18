import { navItems } from "@/data";
import Link from "next/link";

interface Props {
    scrolled?: boolean;
    footer?: boolean;
}

export const NavLinks = ({ scrolled = false, footer = false }: Props) => {
    return (
        <nav
            className={`sm:flex 
                ${
                    footer
                        ? "flex justify-center items-center flex-col gap-0"
                        : "hidden flex-row justify-evenly items-center gap-10"
                } `}
        >
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    href={item.path}
                    className={`group relative ${
                        scrolled ? "text-black" : "text-white"
                    } font-semibold px-5 py-2 transition-all duration-300`}
                >
                    {item.title}
                    <span className="absolute  left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-azul to-azul-bajo transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                </Link>
            ))}
        </nav>
    );
};
