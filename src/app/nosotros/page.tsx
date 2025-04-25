import { Footer, Header } from "@/components";
import { aboutUsNotes, imagesAboutUs } from "@/data";
import {
    FoundationSection,
    Notebook,
    OurHistorySection,
    ValuesSection,
} from "./components";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <>
            <Header
                title="El Equipo que Inspira Futuros Lectores y Escritores"
                button={false}
                images={imagesAboutUs}
            />
            <OurHistorySection />
            <Image
                src="/waves-purple.svg"
                alt="Separador"
                width={1000}
                height={100}
                className="w-full h-48 object-cover"
            />
            <ValuesSection />
            {aboutUsNotes.map((note) => (
                <Notebook
                    key={note.title}
                    title={note.title}
                    subtitle={note.subtitle}
                    color={note.color}
                    text={note.text}
                    textColor={note.textColor}
                />
            ))}
            <FoundationSection />
            <Footer />
        </>
    );
}
