import { Notices } from "@/interfaces";

export async function getNotices(currentPage: number) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/notice/api?page=${currentPage}`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        return data as Notices;
    } catch (error) {
        console.log(error);
    }
}
