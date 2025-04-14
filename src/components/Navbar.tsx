"use client";

import { useEffect, useState } from "react";
import { DrawerList } from "./DrawerList";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
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
        <div
            className={`fixed top-0 left-0 w-full z-70 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="xl:max-w-[1440px] mx-auto flex items-center justify-between  ">
                <Logo scrolled={scrolled} />
                <NavLinks scrolled={scrolled} />
                <div className="sm:hidden flex">
                    <DrawerList scrolled={scrolled} />
                </div>
            </div>
        </div>
    );
};
