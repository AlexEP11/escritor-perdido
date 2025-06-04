export interface Gallery {
    count: number;
    previous: string;
    next: string;
    results: GalleryImage[];
}

export interface GalleryImage {
    title: string;
    author: string;
    image: string;
    description: string;
    publish: string;
}
