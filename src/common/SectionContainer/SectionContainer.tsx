import { SectionTitle } from "../SectionTitle/SectionTitle";

interface ISectionContainerProps {
    title: string;
    description: string;
    children: React.ReactNode;
    id: string;
}

export const SectionContainer = ({ title, description, id, children }: ISectionContainerProps) => {
    return (
        <section id={id}>
            <div className="container mx-auto px-4">
                <SectionTitle title={title} description={description} />
                {children}
            </div>
        </section>
    )
}


