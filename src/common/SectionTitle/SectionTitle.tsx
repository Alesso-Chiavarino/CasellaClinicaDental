interface ISectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitle = ({ title, description }: ISectionTitleProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 px-4 py-20 mx-auto text-center"
    >
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-lg font-medium opacity-80 w-[70%]">{description}</p>
    </div>
  );
};
