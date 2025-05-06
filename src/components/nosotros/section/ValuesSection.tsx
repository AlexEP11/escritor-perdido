import { AboutUsValues } from "@/data";
import { ValuesCard } from "../values-card/ValuesCard";

export const ValuesSection = () => {
    return (
        <article className=" py-16 sm:py-20 ">
            <h2 className="uppercase text-5xl title-chelsea text-center">
                Nuestros Valores
            </h2>
            <section className="max-w-[1440px] mx-auto">
                <div className="text-justify mt-20 justify-items-center grid grid-cols-1 gap-y-30 gap-x-10 lg:grid-cols-5 px-4">
                    {AboutUsValues.map((value) => (
                        <ValuesCard
                            key={value.image}
                            title={value.title}
                            image={value.image}
                            description={value.desciption}
                            color={value.color}
                        />
                    ))}
                </div>
            </section>
        </article>
    );
};
