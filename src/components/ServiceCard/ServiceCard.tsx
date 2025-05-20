interface IServiceCardProps {
    service: {
        icon: React.ReactNode
        title: string
        description: string
    }
}

export const ServiceCard = ({ service }: IServiceCardProps) => {
    return (
       <li className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
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
