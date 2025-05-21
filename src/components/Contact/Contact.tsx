import { SectionContainer } from "../../common/SectionContainer/SectionContainer";
import { Datepicker } from "flowbite-react";
import { Send } from "lucide-react";
import { useState } from "react";
import {EmailJSDataProvider} from "../../services/EmailJS/EmailJSDataProvider";

export const Contact = () => {
  const title = "Agenda tu Turno";
  const description =
    "Completa el formulario y nos pondremos en contacto contigo para confirmar tu turno.";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitValues = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formValues);
    try {
      EmailJSDataProvider.sendEmail(formValues)
    } catch(err) {
      console.log("Error al enviar el formulario:", err);
    }
  };

  return (
    <SectionContainer title={title} description={description} id={"contact"}>
      <form
        onSubmit={submitValues}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto"
      >
        {/* Nombre y Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            name="phone"
            type="tel"
            value={formValues.phone}
            onChange={handleChange}
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
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Servicio y Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Servicio de interés
          </label>
          <select
            name="service"
            value={formValues.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Selecciona un servicio</option>
            <option value="odontologia-general">Odontología General</option>
            <option value="endodoncia">Endodoncia</option>
            <option value="odontologia-preventiva">
              Odontología Preventiva
            </option>
            <option value="cirugia">Cirugía</option>
            <option value="rehabilitacion-oral">Rehabilitación Oral</option>
            <option value="odontologia-estetica">
              Odontología Estética
            </option>
            <option value="rellenos-acido-hialuronico">
              Rellenos con Ácido Hialurónico
            </option>
            <option value="ortodoncia">Ortodoncia</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha preferida
          </label>
          <Datepicker
            onChange={(date: Date) =>
              setFormValues((prev) => ({
                ...prev,
                date: date.toLocaleDateString("es-AR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
              }))
            }
          />
        </div>

        {/* Mensaje */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje o síntomas
          </label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
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
            <Send className="w-4 h-4" />
            <span>Solicitar Turno</span>
          </button>
        </div>
      </form>
    </SectionContainer>
  );
};
