import { SectionTitle } from "../SectionTitle/SectionTitle";

interface ISectionContainerProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export const SectionContainer = ({ title, description, children }: ISectionContainerProps) => {
    return (
        <section>
            <div className="container mx-auto px-4">
                <SectionTitle title={title} description={description} />
                {children}
            </div>
        </section>
    )
}


