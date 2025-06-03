"use client";
import { getPostsPerPage } from "@/api";
import { redirect, useParams } from "next/navigation";
import { BlogCard, CardSkeleton } from "@/components";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import type { BlogPage } from "@/interfaces";

export default function BlogPage() {
    const { page } = useParams<{ page: string }>();

    const { data, isLoading, isError } = useQuery<BlogPage>({
        queryKey: ["blog", page],
        queryFn: () => getPostsPerPage(page),
    });

    console.log(data);
    if (isError) redirect("/404");

    return (
        <>
            <h1 className="title-chelsea text-5xl uppercase mt-16 text-center">
                Cada experiencia, un recuerdo
            </h1>
            {isLoading ? (
                <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:max-w-[1440px] mt-20 mx-auto px-5 justify-items-center">
                    <CardSkeleton amount={12} />
                </section>
            ) : data?.results.length === 0 ? (
                <p className="flex justify-center text-center title-chelsea my-20 text-4xl">
                    Aún no hay publicaciones disponibles…
                </p>
            ) : (
                <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:max-w-[1440px] mt-20 mx-auto px-5 justify-items-center">
                    {data?.results.map((cardInfo, index) => (
                        <BlogCard key={index} cardInfo={cardInfo} />
                    ))}
                </section>
            )}
            {data && data?.results.length !== 0 && (
                <div className="max-w-[1440px] mx-auto flex justify-between items-center px-12 mt-16">
                    {data.previous ? (
                        <Link
                            href={`/blog/${Number(page) - 1}`}
                            className=" bg-gray-800 hover:bg-gray-900 transition-all hover:scale-105 hover:-rotate-2 duration-300 text-white font-bold px-4 py-2 rounded"
                        >
                            Anterior
                        </Link>
                    ) : (
                        <div className="w-[100px]" />
                    )}

                    <span className="text-xl font-bold text-center">
                        Página {page}
                    </span>

                    {data.next ? (
                        <Link
                            href={`/blog/${Number(page) + 1}`}
                            className=" bg-gray-800 hover:bg-gray-900 transition-all hover:scale-105 hover:-rotate-2 duration-300 text-white font-bold px-4 py-2 rounded"
                        >
                            Siguiente
                        </Link>
                    ) : (
                        <div className="w-[100px]" />
                    )}
                </div>
            )}
        </>
    );
}
