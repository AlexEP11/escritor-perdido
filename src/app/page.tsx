import Image from "next/image";
import { WeAreSection } from "./components";

export default function Home() {
    return (
        <>
            <WeAreSection />
            <Image
                src="/waves.svg"
                alt="Wave decoration"
                width={100}
                height={100}
                className="w-full h-48 object-cover"
            />
        </>
    );
}
