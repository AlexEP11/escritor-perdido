import { Gallery } from "@/interfaces";

export async function getGalleryPhotos(currentPage: number) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/image/api?page=${currentPage}`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        return data as Gallery;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.log(error);
    }
}
