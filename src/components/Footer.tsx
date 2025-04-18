import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export const Footer = () => {
    return (
        <footer className="lg:h-[470px] h-full bg-morado mt-16 text-black">
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
                        >
                            <Image
                                src="/instagram.png"
                                alt="Icono Instagram"
                                width={40}
                                height={180}
                                className="hover:cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/facebook.png"
                                alt="Icono Facebook"
                                width={24}
                                height={180}
                                className="hover:cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300"
                            />
                        </Link>
                    </div>
                </div>

                {/* Dirección + Mapa */}
                <div className="flex flex-col justify-center text-center lg:text-start lg:justify-start mt-10 md:mt-4 gap-4 py-10 sm:py-0">
                    <div>
                        <p className="font-semibold">Dirección:</p>
                        <p className="text-sm">
                            Avenida Tecnológico #100 Ciudad Guzmán de, 49100,
                            Cdad. Guzmán, Jal.
                        </p>
                    </div>
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.0829277140497!2d-103.49075652405408!3d19.666467133169217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f86b69affffff%3A0x540ea0f14dc3b497!2sInstituto%20Tecnol%C3%B3gico%20de%20Ciudad%20Guzm%C3%A1n!5e0!3m2!1ses-419!2smx!4v1744940535819!5m2!1ses-419!2smx"
                            width="650"
                            height="350"
                            className="rounded-xl max-w-xs sm:max-w-2xl md:max-w-xl lg:max-w-md 2xl:max-w-2xl  "
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};
