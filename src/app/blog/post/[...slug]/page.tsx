import Image from "next/image";
import parse from "html-react-parser";
import { getInfoPost, getPostsPerPage } from "@/api";
import { BlogCard } from "@/components";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string[] }>;
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const slugPath = slug.join("/");
    const { title, author, cover_image, body, publish } = await getInfoPost(
        slugPath
    );
    if (!author) notFound();

    const { results } = await getPostsPerPage("1");

    return (
        <section className="max-w-[1600px] antialiased px-5 mx-auto mt-20 flex flex-col lg:flex-row justify-between gap-20">
            <div className="lg:w-3/4">
                <h2 className="text-center text-4xl title-chelsea uppercase mb-10">
                    {title}
                </h2>
                <figure>
                    <Image
                        src={cover_image || "/carousel/blog/image1.webp"}
                        alt={`Imagen Post | ${title}`}
                        width={900}
                        height={800}
                        className="w-full object-cover rounded-xl border-gray-200 border shadow-md"
                    />
                    <figcaption className="flex justify-between italic items-center font-bold mt-2 mb-10">
                        <p>{author}</p>
                        <p>{new Date(publish).toLocaleDateString()}</p>
                    </figcaption>
                </figure>

                <article className="w-full overflow-hidden">
                    {parse(body)}
                </article>
            </div>
            <div className="flex flex-col items-center gap-10 lg:w-1/4">
                <h3 className="text-center italic text-2xl mb-4 title-chelsea">
                    Otros posts que podrían gustarte…
                </h3>

                {[...results]
                    .filter((post) => post.title !== title)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map((cardInfo, index) => (
                        <BlogCard key={index} cardInfo={cardInfo} />
                    ))}
            </div>
        </section>
    );
}
