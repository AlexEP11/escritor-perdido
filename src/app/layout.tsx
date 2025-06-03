import {
    Montserrat_Alternates,
    Cabin_Sketch,
    Chelsea_Market,
    Rubik_Doodle_Shadow,
} from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";

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
    authors: [
        { name: "Dalila del Toro Rodríguez" },
        { name: "Diana Laura Moreno" },
        { name: "Alejandro Estrada Ponce" },
        { name: "Fernando Genaro Vizcaino Sanchez" },
    ],
    keywords: [
        "ludoteca literaria",
        "creatividad literaria",
        "juegos literarios",
        "escritura creativa",
        "actividades literarias",
    ],
    category: "educación",
    // TODO: Poner openGraph cuando haya dominio
    robots: {
        index: true, // Permite a los buscadores indexar esta página
        follow: true, // Permite a los buscadores seguir los enlaces de esta página
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body
                className={`
                  ${montserratAlt.variable}
                  ${cabinSketch.variable}
                  ${chelseaMarket.variable}
                  ${rubikDoodle.variable}
                  antialiased
                  min-h-screen flex flex-col
                `}
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')",
                }}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
