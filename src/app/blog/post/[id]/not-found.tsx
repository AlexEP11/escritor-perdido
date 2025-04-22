import Image from "next/image";
import Link from "next/link";

export default function NotFoundPostPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold md:mt-10 text-gray-800">
                ¡Ups! Parece que no hay nada por aquí...
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gray-600 mt-10">
                El artiuclo que estás buscando no existe o ha sido movido.
            </h2>
            <Image
                src="/404-space.svg"
                alt="Space 404 Not Found"
                width={1000}
                height={1000}
                className="max-w-full"
            />
            <Link
                href="/blog"
                className="font-bold rounded-lg text-gray-800 p-4 bg-blue-400 hover:bg-blue-500 hover:scale-125 transition-all duration-300 "
            >
                Volver al Blog
            </Link>
        </main>
    );
}
