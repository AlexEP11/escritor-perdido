import { Metadata } from "next";

export const metadata: Metadata = {
    title: "En Busca del Escritor Perdido | Sobre Nosotros",
    description:
        "Conoce la historia, misión y equipo detrás de 'En Busca del Escritor Perdido'. Una propuesta educativa innovadora que transforma la enseñanza de la lectoescritura y matemáticas en preescolar mediante cuentos, creatividad y acompañamiento docente.",
    icons: "/logo-ico.ico",
    authors: [
        { name: "Dalila del Toro Rodríguez" },
        { name: "Diana Laura Moreno" },
        { name: "Equipo EBEP" },
    ],
    keywords: [
        "educación preescolar innovadora",
        "método de lectoescritura con cuentos",
        "formación docente NEM",
        "planeaciones didácticas preescolar",
        "habilidades básicas para la vida",
        "Nueva Escuela Mexicana",
        "creación literaria infantil",
        "equipo educativo comprometido",
    ],
    category: "educación infantil",

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

export default function AboutUsLayout({
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
