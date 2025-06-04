export interface Contacto {
    name: string;
    email: string;
    subject: string;
    message: string;
    profession: number;
}

export interface Profession {
    id: number;
    name: string;
}

export interface MessageResponse {
    message: string;
    data: Message;
}

export interface Message {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    profession: number;
    created_at: string;
    read: boolean;
}
