"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "./terms-sections";

export default function TermsModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:text-sm px-5 py-2 font-semibold cursor-pointer text-white"
                >
                    Ver Términos y Condiciones
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[70vh] flex flex-col"
                        >
                            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                                <h2 className="text-xl  text-gray-800  title-chelsea">
                                    Términos y Condiciones
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-red-500 transition-colors duration-150 text-2xl leading-none cursor-pointer"
                                >
                                    ✖
                                </button>
                            </div>

                            <div className="overflow-y-auto px-6 py-5 flex-1 space-y-5 text-sm text-gray-700">
                                {SECTIONS.map((section) => (
                                    <div key={section.id}>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {section.id}. {section.title}
                                        </h3>
                                        <p className="leading-relaxed">
                                            {section.body}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2.5 bg-morado text-white text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer"
                                >
                                    Aceptar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
