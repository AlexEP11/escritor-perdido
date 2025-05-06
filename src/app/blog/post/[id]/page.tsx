import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
    // TODO: Hacer peticion fetch para obtener toda la informacioinn del post mediante el parametro de la id
    const { id } = await params;

    try {
        const response = await fetch(`https://api.example.com/posts/${id}`);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const post = await response.json();
    } catch (error) {
        console.log(
            `Error en el post con id: ${id}. Mensaje de error: ${error}`
        );
        notFound();
    }

    return (
        <section className="max-w-3xl mx-auto mt-20">
            <h2 className="text-center text-4xl title-chelsea uppercase mb-10">
                Titulo del post clickeado
            </h2>
            <figure>
                <Image
                    src="/image5.avif" // TODO: Cambiar a imagen de la peticion
                    alt="Imagen post (title)" // TODO: Imagen + titulo del post
                    width={800}
                    height={700}
                    className="w-full object-cover rounded-xl border-gray-200 border shadow-md"
                />
                <figcaption className="flex justify-between items-center font-bold mt-5">
                    <p>Usuario</p>
                    <p>{new Date().toLocaleDateString()}</p>
                </figcaption>
            </figure>
            {/* 
                // TODO: Incrustar HTML del backend (averiguar como)
            */}
        </section>
    );
}
