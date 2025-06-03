export interface BlogPage {
    count: number;
    previous: string;
    next: string;
    results: CardInfo[];
}

export interface CardInfo {
    title: string;
    author: string;
    cover_image: string;
    url: string;
    description: string;
    publish: string;
}
