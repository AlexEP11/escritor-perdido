import Image from "next/image";

interface Props {
    scrolled?: boolean;
}

export const Logo = ({ scrolled = false }: Props) => {
    return (
        <div
            className={`bg-white rounded-b-lg p-1 ${
                scrolled ? "shadow-none" : "shadow-sm"
            }  max-w-[160px]`}
        >
            <Image
                src="/logo-vertical.png"
                width={80}
                height={80}
                alt="Logo de En busca del Escritor Perdido"
                className="w-15 h-15 xs:w-full lg:w-auto lg:h-auto object-contain "
                priority
            />
        </div>
    );
};
