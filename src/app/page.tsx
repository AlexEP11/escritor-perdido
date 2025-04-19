import Image from "next/image";
import { LiteraryCreationSection, WeAreSection } from "./components";
import { ProcessCreationSection } from "./components/ProcessCreationSection";
import { Footer, Header } from "@/components";

export default function Home() {
    return (
        <>
            <Header />
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
