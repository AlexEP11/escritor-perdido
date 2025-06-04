"use client";

import { getProfessions, sendContactMessage } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Contacto } from "@/interfaces";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
    const { register, handleSubmit } = useForm<Contacto>();
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const { data: profesions } = useQuery({
        queryKey: ["professions"],
        queryFn: getProfessions,
    });

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
    });

    const { mutate } = useMutation({
        mutationKey: ["contact message"],
        mutationFn: (formData: Contacto) => sendContactMessage(formData),
        onSuccess: (data) => {
            setIsError(false);

            setMessage(data?.message || "Mensaje enviado correctamente");
        },
        onError: (error) => {
            setIsError(true);
            setMessage(error?.message);
        },
    });

    const onSubmit = (formData: Contacto) => {
        mutate(formData);
        setTimeout(() => {
            setIsError(false);
            setMessage("");
        }, 5000);
    };

    return (
        <>
            <motion.form
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md mt-18 lg:mt-40 mx-auto border border-black rounded-md p-6 relative bg-white"
                onSubmit={handleSubmit(onSubmit)}
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4"
                >
                    <h2 className="text-center bg-azul-oscuro text-white title-chelsea py-3 rounded">
                        CONTACTA CON NOSOTROS
                    </h2>
                </motion.div>

                <div className="space-y-5 mt-10">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                        required
                        {...register("name")}
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                        required
                        {...register("email")}
                    />
                    <input
                        type="text"
                        placeholder="Asunto"
                        className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                        required
                        {...register("subject")}
                    />
                    <select
                        className="w-full border border-black rounded px-3 py-3.5 focus:outline-none"
                        required
                        defaultValue={0}
                        {...register("profession")}
                    >
                        <option value="0" disabled>
                            --- Selecciona una opción ---
                        </option>
                        {profesions?.map((profesion) => (
                            <option key={profesion.id} value={profesion.id}>
                                {profesion.name}
                            </option>
                        ))}
                    </select>

                    <textarea
                        placeholder="Mensaje"
                        rows={6}
                        className="w-full border border-black rounded px-3 py-2 resize-none focus:outline-none"
                        required
                        {...register("message")}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                    className="flex justify-between items-center"
                >
                    <input
                        value="Reiniciar"
                        type="reset"
                        className="bg-gray-200 hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-300 px-3 py-2 mt-2 text-black font-semibold rounded-md"
                    />
                    <input
                        type="submit"
                        className="bg-azul-oscuro/85 hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-azul-oscuro px-3 py-2 mt-2 text-white font-semibold rounded-md"
                    />
                </motion.div>
                {message && (
                    <p
                        className={`${
                            isError ? "bg-red-600" : "bg-green-600"
                        } px-3 py-2 w-full text-center font-bold text-white rounded-lg mt-5`}
                    >
                        {message}
                    </p>
                )}
            </motion.form>
        </>
    );
};
