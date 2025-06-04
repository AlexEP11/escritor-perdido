export interface Notices {
    count: number;
    previous: string;
    next: string;
    results: Notice[];
}

export interface Notice {
    title: string;
    content: string;
    type: NoticeType;
    publish: string;
}

export interface NoticeType {
    name: string;
    color: string;
    icon_url: string;
}
