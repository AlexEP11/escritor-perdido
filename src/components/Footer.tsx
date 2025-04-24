"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
    });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:h-[470px] h-full bg-morado mt-16 text-black"
        >
            <div className="flex flex-col justify-center lg:flex-row items-center lg:justify-evenly px-10">
                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Image
                        src="/logo-vertical.png"
                        alt="Logo Footer"
                        width={500}
                        height={180}
                        className="w-3/4 h-auto"
                    />
                </div>

                {/* Navegación + Redes */}
                <div className="flex flex-col justify-center items-center gap-2 mt-4">
                    <NavLinks footer />
                    <p className="mt-4 font-semibold">Redes sociales</p>
                    <div className="flex gap-10 mt-1 text-2xl">
                        <Link
                            href="https://www.instagram.com/enbuscadelescritor/?hl=es"
                            target="_blank"
                            rel="noopener noreferrer"
                            prefetch={false}
                        >
                            <Image
                                src="/instagram.png"
                                alt="Icono Instagram"
                                width={40}
                                height={180}
                                className="hover:cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300 h-auto"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            prefetch={false}
                        >
                            <Image
                                src="/facebook.png"
                                alt="Icono Facebook"
                                width={24}
                                height={180}
                                className="hover:cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300 h-auto"
                            />
                        </Link>
                    </div>
                </div>

                {/* Dirección + Mapa */}
                <div className="flex flex-col justify-center text-center lg:text-start lg:justify-start mt-10 md:mt-4 gap-4 py-10 sm:py-0">
                    <div>
                        <p className="font-semibold">Dirección:</p>
                        <p className="text-sm">
                            C. Federico del Toro 460, Centro, 49000 Cdad.
                            Guzmán, Jal.
                        </p>
                    </div>
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.9928258247706!2d-103.46297233037598!3d19.71384586135318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f86afd15a04df%3A0xc4a4a8d6c7df57c7!2sC.%20Federico%20del%20Toro%20460%2C%20Centro%2C%2049000%20Cdad.%20Guzm%C3%A1n%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1744992742679!5m2!1ses-419!2smx"
                            width="650"
                            height="350"
                            className="rounded-xl max-w-xs sm:max-w-2xl md:max-w-xl lg:max-w-md 2xl:max-w-2xl "
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Google Maps que indica la dirección de la ludoteca"
                        ></iframe>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};
