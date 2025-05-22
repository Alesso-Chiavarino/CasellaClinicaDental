import logo from "../../assets/casella-logo.png";
import { ScheduleButton } from "../../common/ScheduleButton/ScheduleButton";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { NavPanel } from "./NavPanel/NavPanel";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePanel = (value: boolean) => {
        setIsOpen(value);
    };

    // Bloquea scroll al abrir el panel
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <>
            <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md text-black sticky top-0 z-50">
                <a href="#" className="cursor-pointer">
                    <img src={logo.src} alt="Logo" className="w-[140px]" />
                </a>

                <ul className="gap-5 items-center hidden lg:flex">
                    <li className="hover:text-[#9fe3d9] transition-all duration-300">
                        <a href="#professionals">Profesionales</a>
                    </li>
                    <li className="hover:text-[#9fe3d9] transition-all duration-300">
                        <a href="#gallery">Galería</a>
                    </li>
                    <li className="hover:text-[#9fe3d9] transition-all duration-300">
                        <a href="#testimonials">Testimonios</a>
                    </li>
                    <li className="hover:text-[#9fe3d9] transition-all duration-300">
                        <a href="#location">Ubicación</a>
                    </li>
                    <li className="hover:text-[#9fe3d9] transition-all duration-300">
                        <a href="#contact">Contacto</a>
                    </li>
                    <li>
                        <ScheduleButton />
                    </li>
                </ul>

                <div className="lg:hidden" onClick={() => handlePanel(true)}>
                    <MenuIcon />
                </div>
            </nav>

            {/* Panel móvil con animación */}
            <NavPanel handlePanel={handlePanel} isOpen={isOpen} />
        </>
    );
};
