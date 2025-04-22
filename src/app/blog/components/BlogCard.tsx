import Image from "next/image";
import Link from "next/link";

// TODO: Recbir los props de usuario, fecha, imagen, titulo y descripcion
interface Props {
    id: number;
}

export const BlogCard = ({ id }: Props) => {
    return (
        <Link href={`/blog/post/${id.toString()}`}>
            <article className="flex flex-col overflow-hidden rounded-xl shadow-md bg-white max-w-sm hover:scale-110 hover:cursor-pointer hover:rotate-1 hover:shadow-xl transition-all duration-300">
                <figure>
                    <Image
                        src="/image1.avif"
                        alt="Imagen blog"
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                    />
                    <figcaption className="p-4 space-y-2">
                        <h3 className="text-xl title-chelsea line-clamp-2 break-words">
                            Programación Matemática
                        </h3>
                        <p className="text-gray-600 line-clamp-3 break-words ">
                            Procesando matemáticas, una programación desde el
                            aula de Educación Infantil.
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                            <p className="font-bold">Fernando</p>
                            <p className="font-semibold">
                                {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </article>
        </Link>
    );
};
