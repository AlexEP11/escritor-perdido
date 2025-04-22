import Image from "next/image";
import { LiteraryCreationSection, WeAreSection } from "./components";
import { ProcessCreationSection } from "./components/ProcessCreationSection";
import { Footer, Header } from "@/components";
import { imagesHome } from "@/data/images";

export default function Home() {
    return (
        <>
            <Header title="En busca del escritor perdido" images={imagesHome} />
            <WeAreSection />
            <Image
                src="/waves.svg"
                alt="Wave decoration"
                width={100}
                height={100}
                className="w-full h-48 object-cover"
            />
            <LiteraryCreationSection />

            <ProcessCreationSection />
            <Footer />
        </>
    );
}
