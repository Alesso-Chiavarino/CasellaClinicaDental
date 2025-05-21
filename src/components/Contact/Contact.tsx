import { SectionContainer } from "../../common/SectionContainer/SectionContainer";
import { useState } from "react";
import { EmailJSDataProvider } from "../../services/EmailJS/EmailJSDataProvider";
import { Toaster, toast } from "sonner";
import { TextInput } from "../../common/FormInputs/TextInput/TextInput";
import { TelInput } from "../../common/FormInputs/TelInput/TelInput";
import { EmailInput } from "../../common/FormInputs/EmailInput/EmailInput";
import { SelectInput } from "../../common/FormInputs/SelectInput/SelectInput";
import { DateInput } from "../../common/FormInputs/DateInput/DateInput";
import { TextAreaInput } from "../../common/FormInputs/TextAreaInput/TextAreaInput";
import { Button } from "../../common/FormInputs/Button/Button";

export const Contact = () => {
  const title = "Agenda tu Turno";
  const description =
    "Completa el formulario y nos pondremos en contacto contigo para confirmar tu turno.";

  const formInitialValues = {
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(formInitialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formValues.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formValues.phone.trim())
      newErrors.phone = "El teléfono es requerido";
    if (!formValues.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Correo inválido";
    }
    if (!formValues.service)
      newErrors.service = "Debes seleccionar un servicio";

    return newErrors;
  };

  const submitValues = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Por favor completa los campos requeridos");
      return;
    }

    // try {
    //   const res = await EmailJSDataProvider.sendEmail(formValues);

    //   if (res.status === 200) {
    //     toast.success("Formulario enviado con éxito");
    //     setFormValues(formInitialValues);
    //     setErrors({});
    //   } else {
    //     toast.error("Hubo un problema al enviar el formulario");
    //   }
    // } catch (err) {
    //   console.error("Error al enviar el formulario:", err);
    //   toast.error("Error de red al enviar el formulario");
    // }
  };

  return (
    <SectionContainer
      title={title}
      description={description}
      id={"contact"}
    >
      <form
        onSubmit={submitValues}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto"
      >
        <TextInput
          value={formValues.name}
          name={"Nombre completo"}
          handleChange={handleChange}
          keyName={"name"}
          error={errors.name}
          isMandatory={true}
          placeholder={"Tu nombre completo"}
        />
        <TelInput
          value={formValues.phone}
          name={"Teléfono"}
          handleChange={handleChange}
          placeholder={"Tu número de teléfono"}
          keyName={"phone"}
          error={errors.phone}
          isMandatory={true}
        />
        <EmailInput
          value={formValues.email}
          name={"Correo electrónico"}
          handleChange={handleChange}
          placeholder={"Tu correo electrónico"}
          className={"md:col-span-2"}
          keyName={"email"}
          error={errors.email}
          isMandatory={true}
        />
        <SelectInput
          name="Servicio de interés"
          value={formValues.service}
          handleChange={handleChange}
          keyName={"service"}
          placeholder="Selecciona un servicio"
          error={errors.service}
          isMandatory={true}
        >
          <option value="">Selecciona un servicio</option>
          <option value="odontologia-general">Odontología General</option>
          <option value="endodoncia">Endodoncia</option>
          <option value="odontologia-preventiva">
            Odontología Preventiva
          </option>
          <option value="cirugia">Cirugía</option>
          <option value="rehabilitacion-oral">Rehabilitación Oral</option>
          <option value="odontologia-estetica">Odontología Estética</option>
          <option value="rellenos-acido-hialuronico">
            Rellenos con Ácido Hialurónico
          </option>
          <option value="ortodoncia">Ortodoncia</option>
        </SelectInput>
        <DateInput
          value={formValues.date}
          name={"Fecha preferida"}
          handleChange={handleChange}
          keyName={"date"}
          error={errors.date}
        />
        <TextAreaInput
          value={formValues.message}
          name={"Mensaje o síntomas"}
          handleChange={handleChange}
          placeholder={
            "Describe brevemente tu consulta o los síntomas que presentas"
          }
          className={"md:col-span-2"}
          keyName={"message"}
        />
        <Button title={"Solicitar Turno"} className={"md:col-span-2"} />
      </form>
      <Toaster />
    </SectionContainer>
  );
};
