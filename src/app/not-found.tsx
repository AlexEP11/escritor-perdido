import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 | Página no encontrada",
    description: "La página que estás buscando no existe o ha sido movida.",
    robots: {
        index: false,
        follow: false,
    },

    // TODO: Poner openGraph cuando haya dominio
};

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold md:mt-10 text-gray-800">
                ¡Ups! Parece que no hay nada por aquí...
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gray-600 mt-10">
                La página que estás buscando no existe o ha sido movida.
            </h2>
            <Image
                src="/not-found/404-cat.svg"
                alt="Gato 404 Not Found"
                width={800}
                height={1000}
                className="max-w-full"
            />
            <Link
                href="/"
                className="font-bold rounded-lg text-gray-800 p-4 bg-blue-400 hover:bg-blue-500 hover:scale-125 transition-all duration-300 "
            >
                Volver al Inicio
            </Link>
        </main>
    );
}
