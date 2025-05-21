import { SectionContainer } from "../../common/SectionContainer/SectionContainer";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { Smile, Microscope, Shield, Scissors, Wrench, Sparkles, Syringe, AlignJustify } from "lucide-react"

export const Services = () => {

    const services = [
        {
            title: "Odontología General",
            description: "Limpiezas, arreglos, placas de relajación, etc.",
            icon: <Smile className="w-8 h-8 text-primary" />,
        },
        {
            title: "Endodoncia",
            description: "Tratamientos de conducto, terapias vitales pulpares, traumatismos.",
            icon: <Microscope className="w-8 h-8 text-primary" />,
        },
        {
            title: "Odontología Preventiva",
            description: "Controles periódicos, topicaciones con flúor, protectores bucales para deporte, etc.",
            icon: <Shield className="w-8 h-8 text-primary" />,
        },
        {
            title: "Cirugía",
            description: "Extracciones simples, extracciones de retenidos y semi retenidos, colocación de implantes.",
            icon: <Scissors className="w-8 h-8 text-primary" />,
        },
        {
            title: "Rehabilitación Oral",
            description: "Prótesis sobre implantes, coronas, incrustaciones, prótesis removibles, etc.",
            icon: <Wrench className="w-8 h-8 text-primary" />,
        },
        {
            title: "Odontología Estética",
            description: "Diseño digital de la sonrisa, carillas, blanqueamientos, microabrasión.",
            icon: <Sparkles className="w-8 h-8 text-primary" />,
        },
        {
            title: "Rellenos con Ácido Hialurónico",
            description: "Tratamientos para mejorar la estética facial y complementar la sonrisa.",
            icon: <Syringe className="w-8 h-8 text-primary" />,
        },
        {
            title: "Ortodoncia",
            description: "Brackets tradicionales, transparentes e invisibles para corregir la posición de tus dientes.",
            icon: <AlignJustify className="w-8 h-8 text-primary" />,
        },
    ];

    const title = "Nuestros Servicios";
    const description =
        "Ofrecemos una amplia gama de tratamientos dentales para toda la familia, utilizando las técnicas más avanzadas.";

    return (
        <SectionContainer title={title} description={description} id={"services"}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </ul>
        </SectionContainer>

    )
}