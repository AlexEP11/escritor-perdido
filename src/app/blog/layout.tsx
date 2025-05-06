import { Metadata } from "next";

export const metadata: Metadata = {
    title: "En Busca del Escritor Perdido | Blog",
    description:
        "Descubre artículos, recursos y reflexiones sobre el mundo de la escritura creativa y la ludoteca literaria en 'En Busca del Escritor Perdido'. Un espacio dedicado a inspirar la creatividad literaria.",
    authors: [
        { name: "Dalila del Toro Rodríguez" },
        { name: "Diana Laura Moreno" },
        { name: "Alejandro Estrada Ponce" },
        { name: "Fernando Genaro Vizcaino Sanchez" },
    ],
    keywords: [
        "ludoteca literaria",
        "creatividad literaria",
        "escritura creativa",
        "artículos literarios",
        "recursos de escritura",
        "inspiración literaria",
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

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main className="flex-grow">{children}</main>
        </>
    );
}
