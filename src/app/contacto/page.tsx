import Image from "next/image";
import { ContactForm } from "./components";

export default function ContactPage() {
    return (
        <>
            <main className="xl:max-w-[1440px] mx-auto px-5">
                <section className="flex flex-col-reverse lg:flex-row-reverse justify-between md:gap-20 items-center">
                    <ContactForm />
                    <Image
                        src="/contact.png"
                        alt="Imagen de Contacto"
                        width={650}
                        height={500}
                        className="mt-10 md:mt-0"
                    />
                </section>
            </main>
        </>
    );
}
