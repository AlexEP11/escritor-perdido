"use client";

import { useEffect, useState } from "react";
import { DrawerList } from "./DrawerList";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { motion } from "framer-motion";

interface Props {
    onlyNav?: boolean;
}

export const Navbar = ({ onlyNav = false }: Props) => {
    const [scrolled, setScrolled] = useState(false);

    // * UseEffect para detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-70 transition-colors duration-300 ${
                scrolled || onlyNav ? "bg-white shadow-md" : "bg-transparent"
            } ${onlyNav && "shadow-md"}`}
        >
            <div className="xl:max-w-[1440px] mx-auto flex items-center justify-between  ">
                <Logo scrolled={scrolled} onlyNav={onlyNav} />
                <NavLinks scrolled={scrolled} onlyNav={onlyNav} />
                <div className="sm:hidden flex">
                    <DrawerList scrolled={scrolled} />
                </div>
            </div>
        </motion.div>
    );
};
