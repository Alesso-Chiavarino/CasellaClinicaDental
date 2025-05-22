interface IServiceCardProps {
    service: {
        icon: React.ReactNode
        title: string
        description: string
    },
    idx: number;
}

export const ServiceCard = ({ service, idx }: IServiceCardProps) => {
    return (
       <li 
       key={service.title}
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={idx * 100} // 0ms, 100ms, 200ms, etc.
      data-aos-easing="ease-out-sine"
       className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-3 mb-2 h-15">
                <div className="text-[#b8eae9]">
                    {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-600">{service.title}</h3>
            </div>

            <p className="text-md">{service.description}</p>
        </li>
    )
}
