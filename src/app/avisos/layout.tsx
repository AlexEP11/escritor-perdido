import { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
    title: "Avisos y Noticias | En Busca del Escritor Perdido",
    description:
        "Mantente informado con los últimos avisos, noticias y actualizaciones del proyecto 'En Busca del Escritor Perdido'. Conoce eventos próximos, cambios importantes y novedades de esta ludoteca literaria.",
    authors: [
        { name: "Dalila del Toro Rodríguez" },
        { name: "Diana Laura Moreno" },
        { name: "Alejandro Estrada Ponce" },
        { name: "Fernando Genaro Vizcaino Sanchez" },
    ],
    keywords: [
        "avisos literarios",
        "noticias culturales",
        "eventos literarios",
        "actualizaciones proyecto",
        "anuncios educación",
        "calendario actividades",
        "comunicados escritores",
        "novedades ludoteca",
    ],
    category: "educación",

    // TODO: Open Graph se agregará cuando el dominio esté disponible
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function GaleriaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="relative h-[70px] sm:h-[100px] w-full overflow-hidden">
                <Navbar onlyNav />
            </header>

            <main className="flex-grow">{children}</main>

            <Footer />
        </>
    );
}
