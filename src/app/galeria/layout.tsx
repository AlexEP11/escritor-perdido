import { Footer, Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galería Visual | En Busca del Escritor Perdido",
    description:
        "Explora nuestra galería de imágenes con ilustraciones, eventos y momentos destacados del proyecto 'En Busca del Escritor Perdido'. Descubre el proceso creativo detrás de esta ludoteca literaria.",
    authors: [
        { name: "Dalila del Toro Rodríguez" },
        { name: "Diana Laura Moreno" },
        { name: "Alejandro Estrada Ponce" },
        { name: "Fernando Genaro Vizcaino Sanchez" },
    ],
    keywords: [
        "galería literaria",
        "imágenes creativas",
        "proceso creativo",
        "eventos literarios",
        "ludoteca visual",
        "ilustraciones literarias",
        "escritura creativa",
        "actividades literarias",
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
