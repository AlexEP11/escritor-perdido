"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { GaleriaList } from "@/components";
import { getGalleryPhotos } from "@/api";
import { Skeleton } from "@mui/material";

export default function GaleriaPage() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            queryKey: ["photos"],
            queryFn: ({ pageParam = "1" }) =>
                getGalleryPhotos(Number(pageParam)),
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

    console.log(data);
    const photos = data?.pages.flatMap((page) => page!.results) || [];

    return (
        <>
            <h1 className="text-5xl font-bold my-10 text-center title-chelsea">
                Galería
            </h1>
            {photos && <GaleriaList results={photos} />}
            {isFetchingNextPage && (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {[...Array(12)].map((_, idx) => (
                        <div key={idx} className="rounded-2xl overflow-hidden">
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height={360}
                            />
                        </div>
                    ))}
                </div>
            )}
            {(!hasNextPage || !photos) && (
                <p className="text-center text-xl text-gray-700 italic mt-4">
                    No hay más imágenes
                </p>
            )}
            <div ref={ref} className="h-40" />
        </>
    );
}
