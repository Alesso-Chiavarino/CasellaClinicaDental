import { SectionContainer } from "../../common/SectionContainer/SectionContainer";
import { Datepicker } from "flowbite-react";
import { Send } from "lucide-react"

export const Contact = () => {
  const title = "Agenda tu Turno";
  const description =
    "Completa el formulario y nos pondremos en contacto contigo para confirmar tu turno.";

  return (
    <SectionContainer title={title} description={description} id={"contact"}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto">
        {/* Nombre y Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Tu nombre completo"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            placeholder="Tu número de teléfono"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Correo */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Servicio y Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Servicio de interés
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Selecciona un servicio</option>
            {/* Aquí puedes agregar más opciones */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha preferida
          </label>
          <Datepicker />
        </div>

        {/* Mensaje */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje o síntomas
          </label>
          <textarea
            placeholder="Describe brevemente tu consulta o los síntomas que presentas"
            className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none"
          />
        </div>

        {/* Botón */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-teal-200 hover:bg-teal-300 text-gray-800 font-medium py-2 px-4 rounded-md flex justify-center items-center gap-2 cursor-pointer transition duration-200 ease-in-out"
          >
            <Send className="w-4 h-4"/>
            <span>Solicitar Turno</span>
          </button>
        </div>
      </form>
    </SectionContainer>
  );
};
