export const ContactForm = () => {
    // TODO: Hacer la logica del formulario

    return (
        <form className="max-w-md mt-18 lg:mt-40 mx-auto border border-black rounded-md p-6 relative bg-white">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4">
                <h2 className="text-center bg-azul-oscuro text-white title-chelsea py-3 rounded">
                    CONTACTA CON NOSOTROS
                </h2>
            </div>

            <div className="space-y-5 mt-10">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    required
                />
                <input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                    required
                />
                <select
                    className="w-full border border-black rounded px-3 py-3.5 focus:outline-none"
                    required
                    name="profesion"
                    defaultValue={0}
                >
                    <option value="0" disabled>
                        Profesion
                    </option>
                    {["Padre", "Maestro", "Estudiante"].map((item, index) => (
                        <option key={item} value={index + 1}>
                            {item}
                        </option>
                    ))}
                </select>

                <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    rows={6}
                    className="w-full border border-black rounded px-3 py-2 resize-none focus:outline-none"
                    required
                />
            </div>

            <div className="flex justify-between items-center">
                <input
                    value="Reiniciar"
                    type="reset"
                    className="bg-gray-200 hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-300 px-3 py-2 mt-2 text-black font-semibold rounded-md"
                />
                <input
                    type="submit"
                    className="bg-azul-oscuro/85 hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-azul-oscuro px-3 py-2 mt-2 text-white font-semibold rounded-md"
                />
            </div>
        </form>
    );
};
