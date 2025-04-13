import Image from "next/image";

export const Logo = () => {
    return (
        <div className="bg-white rounded-b-2xl p-2 shadow-sm max-w-[160px]">
            <Image
                src="/logo-vertical.png"
                width={80}
                height={80}
                alt="Logo de En busca del Escritor Perdido"
                className="w-full h-auto object-contain"
                priority
            />
        </div>
    );
};
