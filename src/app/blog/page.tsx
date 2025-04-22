import { Footer, Header } from "@/components";
import { BlogCard } from "./components/BlogCard";
import { imagesBlog } from "@/data/images";

export default function BlogPage() {
    // TODO: Hacer peticion fetch para obtener todas las entradas de blog en un array
    return (
        <>
            <Header
                title="Historias, talleres y momentos para recordar"
                button={false}
                images={imagesBlog}
            />

            <h1 className="title-chelsea text-5xl uppercase mt-16 text-center">
                Historias, talleres y momentos para recordar
            </h1>
            <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 xl:max-w-[1440px] mt-20 mx-auto px-5 justify-items-center">
                <BlogCard id={0} />
                <BlogCard id={1} />
                <BlogCard id={2} />
                <BlogCard id={3} />
                <BlogCard id={4} />
                <BlogCard id={5} />
                <BlogCard id={6} />
                <BlogCard id={7} />
                <BlogCard id={8} />
                <BlogCard id={9} />
                <BlogCard id={10} />
                <BlogCard id={11} />
            </section>

            <Footer />
        </>
    );
}
