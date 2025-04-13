import {
    Montserrat_Alternates,
    Cabin_Sketch,
    Chelsea_Market,
    Rubik_Doodle_Shadow,
} from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components";
import "./globals.css";

const montserratAlt = Montserrat_Alternates({
    variable: "--font-montserrat-alt",
    weight: ["400", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

const cabinSketch = Cabin_Sketch({
    variable: "--font-cabin-sketch",
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const chelseaMarket = Chelsea_Market({
    variable: "--font-chelsea-market",
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const rubikDoodle = Rubik_Doodle_Shadow({
    variable: "--font-rubik-doodle",
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "En Busca del Escritor Perdido | Inicio",
    description:
        "Descubre la ludoteca 'En Busca del Escritor Perdido', un espacio dedicado a fomentar la creatividad literaria a través de juegos y actividades interactivas.",
    icons: "/logo-ico.ico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
                  ${montserratAlt.variable}
                  ${cabinSketch.variable}
                  ${chelseaMarket.variable}
                  ${rubikDoodle.variable}
                  antialiased
                `}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
