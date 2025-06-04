import type { BlogPage } from "@/interfaces";
import { redirect } from "next/navigation";

export async function getPostsPerPage(currentPage: string): Promise<BlogPage> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/blog/api?page=${currentPage}`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        return data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        redirect("/404");
    }
}
