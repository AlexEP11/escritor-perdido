import { Footer, Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "En Busca del Escritor Perdido | Contacto",
    description:
        "Ponte en contacto con el equipo de 'En Busca del Escritor Perdido'. Resolvemos tus dudas, escuchamos tus comentarios y estamos listos para ayudarte a fomentar la creatividad literaria.",
    icons: "/logo-ico.ico",
    authors: [
        { name: "Dalila del Toro Rodríguez" },
        { name: "Diana Laura Moreno" },
        { name: "Alejandro Estrada Ponce" },
        { name: "Fernando Genaro Vizcaino Sanchez" },
    ],
    keywords: [
        "ludoteca literaria",
        "contacto",
        "equipo creativo",
        "escritores",
        "creatividad literaria",
        "escritura creativa",
        "contacto",
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

export default function ContactLayout({
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
