interface Props {
    title: string;
    color: string;
    subtitle: string;
    text: string;
    textColor?: string;
}

export const Notebook = ({
    title,
    color,
    subtitle,
    text,
    textColor = "white",
}: Props) => {
    return (
        <section className="flex flex-col lg:flex-row gap-10 mt-15 max-w-[1440px] mx-auto px-4">
            <div
                className={`flex flex-col lg:flex-row items-center p-5 text-center bg-${color} min-w-1/2 min-h-80 rounded-xl shadow-md hover:shadow-2xl duration-300 transition-shadow`}
            >
                <div className="flex flex-col flex-2/3 lg:gap-5 items-center justify-center">
                    <h2
                        className={`uppercase font-bold text-2xl lg:text-6xl -rotate-2 title-chelsea text-${textColor}`}
                    >
                        {title}
                    </h2>
                    <h3
                        className={`${
                            textColor === "black"
                                ? "text-gray-800"
                                : "text-gray-200 "
                        } -rotate-2 font-semibold text-md lg:text-xl`}
                    >
                        {subtitle}
                    </h3>
                </div>
                <div className="flex flex-row lg:flex-col items-center gap-5">
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                </div>
            </div>
            <div
                className={`flex flex-col lg:flex-row items-center justify-center gap-10 p-5 pt-5 text-center lg:text-justify bg-${color} min-w-1/2 min-h-80 rounded-xl shadow-md hover:shadow-2xl duration-300 transition-shadow`}
            >
                <div className="flex flex-row lg:flex-col items-center gap-5">
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                    <span className="bg-white rounded-full border border-gray-300 block w-5 h-5"></span>
                </div>
                <p className={`text-xl text-${textColor}`}>{text}</p>
            </div>
        </section>
    );
};
