import { PostInfo } from "@/interfaces";
import { redirect } from "next/navigation";

export function extractCleanSlug(url: string): string {
    const path = new URL(url).pathname;
    const parts = path.split("/").filter(Boolean);
    const desiredParts = parts.slice(2, 6);
    return desiredParts.join("/");
}

export async function getInfoPost(slugPath: string): Promise<PostInfo> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}/blog/api/${slugPath}/`
        );

        if (!response.ok) throw new Error();
        return await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        redirect("/404");
    }
}
