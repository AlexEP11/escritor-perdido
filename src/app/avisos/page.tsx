"use client";
import { TimeLine } from "@/components";
import { useInView } from "react-intersection-observer";
import { getNotices } from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function AvisosPage() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            queryKey: ["notices"],
            queryFn: ({ pageParam = "1" }) => getNotices(Number(pageParam)),
            initialPageParam: "1",
            getNextPageParam: (lastPage) => {
                const nextUrl = lastPage?.next;
                if (!nextUrl) return undefined;
                const url = new URL(nextUrl);
                return url.searchParams.get("page");
            },
        });

    const { ref } = useInView({
        triggerOnce: false,
        onChange: (inView) => {
            if (inView && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        },
    });

    const notices = data?.pages.flatMap((page) => page!.results) || [];

    return (
        <section>
            <h1 className="text-center text-5xl title-chelsea my-10">Avisos</h1>
            {notices && <TimeLine results={notices} />}
            {(!hasNextPage || !notices) && (
                <p className="text-center text-xl text-gray-700 italic mt-4">
                    No hay más noticias
                </p>
            )}
            <div ref={ref} className="h-40" />
        </section>
    );
}
