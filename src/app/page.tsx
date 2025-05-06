import {
    Footer,
    Header,
    LiteraryCreationSection,
    ProcessCreationSection,
    WeAreSection,
} from "@/components";
import { imagesHome } from "@/data";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header title="En busca del escritor perdido" images={imagesHome} />
            <WeAreSection />
            <Image
                src="/waves/waves.svg"
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
