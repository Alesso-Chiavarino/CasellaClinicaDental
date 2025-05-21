import { MapPin, Clock, Phone, Mail } from "lucide-react"

export const LocationMetadata = () => {
  return (
    <div className="flex flex-col gap-4 w-[30%] min-h-[450px]">
            <article
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow border border-gray-100 min-h-[150px]"
            >
                <div className="text-cyan-600 text-xl">
                    <MapPin />
                </div>
                <div>
                    <h5 className="font-semibold text-lg mb-1">Dirección</h5>
                    <p className="text-gray-600 text-sm">
                        Av. Duarte Quiros 2001 - 1º piso, departamento C<br />
                        Esquina Ocaña - Barrio Alto Alberdi<br />
                        Córdoba
                    </p>
                </div>
            </article>

            <article
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow border border-gray-100 min-h-[150px]"
            >
                <div className="text-cyan-600 text-xl">
                    <Clock />
                </div>
                <div>
                    <h5 className="font-semibold text-lg mb-1">Horario</h5>
                    <p className="text-gray-600 text-sm">
                        Lunes a Viernes: 9:00 - 19:00<br />
                        Sábados: 9:00 - 14:00<br />
                        Domingos: Cerrado
                    </p>
                </div>
            </article>

            <article
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow border border-gray-100 min-h-[150px]"
            >
                <div className="text-cyan-600 text-xl">
                    <Phone />
                </div>
                <div>
                    <h5 className="font-semibold text-lg mb-1">Contacto</h5>
                    <p className="text-gray-600 text-sm">
                        Teléfono: (351) 6132782<br />
                        WhatsApp: (351) 6132782<br />
                        odbarioglio@gmail.com
                    </p>
                </div>
            </article>
        </div>
  )
}
