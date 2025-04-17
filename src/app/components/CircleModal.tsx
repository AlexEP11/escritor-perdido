import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    setClick: (value: boolean | null) => void;
    title: string;
    path: string;
    info: {
        text: string;
        lista: string[];
    };
}

export const CircleModal = ({ setClick, title, path, info }: Props) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 fixed inset-0 bg-black/50 flex items-center justify-center z-150"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-lg shadow-lg max-w-2xl max-h-[90vh] w-full relative overflow-y-auto"
                >
                    <button
                        onClick={() => setClick(null)}
                        className="absolute top-2 right-5 hover:cursor-pointer text-red-500 hover:text-red-600 transition-colors duration-150 text-2xl"
                    >
                        ✖
                    </button>
                    <h3 className="text-2xl font-bold mb-10 text-center">
                        {title}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                        <Image
                            src={path}
                            alt={title}
                            width={60}
                            height={60}
                            className="w-64 h-64"
                        />
                        <div>
                            <p className="text-gray-700 sm:mt-0 text-justify mb-4">
                                {info.text}
                            </p>
                            <ol className="list-decimal list-inside space-y-2">
                                {info.lista.map((item, index) => (
                                    <li className="font-semibold" key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
