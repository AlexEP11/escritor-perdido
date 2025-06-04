import { Contacto, MessageResponse, Profession } from "@/interfaces";

export async function getProfessions() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contact/api/`);

        if (!res.ok) throw new Error();

        const data = await res.json();

        return data as Profession[];
    } catch (error) {
        console.log(error);
    }
}

export async function sendContactMessage(formData: Contacto) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/contact/api/message/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        if (!res.ok) {
            throw new Error("Hubo un error al enviar el mensaje");
        }

        const data = await res.json();
        return data as MessageResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
