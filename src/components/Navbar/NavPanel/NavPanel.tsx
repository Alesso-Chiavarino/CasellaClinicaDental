import { ScheduleButton } from "../../../common/ScheduleButton/ScheduleButton";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import logo from "../../../assets/casella-logo.png";
import { User, Images, Star, MapPin, Contact } from "lucide-react"

interface INavPanelProps {
  handlePanel: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const NavPanel = ({ handlePanel, isOpen }: INavPanelProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 shadow-md">
        <a href="#" className="cursor-pointer" onClick={() => handlePanel(false)}>
          <img src={logo.src} alt="Logo" className="w-[140px]" />
        </a>
        <div onClick={() => handlePanel(false)}>
          <CloseIcon />
        </div>
      </div>

      <ul className="flex flex-col gap-8 px-8 py-10 text-lg">
        <li
          onClick={() => handlePanel(false)}
          className="hover:text-[#9fe3d9] transition-all duration-300 flex items-center font-medium gap-2 justify-center sm:justify-start"
        >
        <User className="w-4 h-4 text-primary font-bold stroke-3" />
          <a href="#professionals">Profesionales</a>
        </li>
        <li
          onClick={() => handlePanel(false)}
          className="hover:text-[#9fe3d9] transition-all duration-300 flex items-center font-medium gap-2 justify-center sm:justify-start"
        >
            <Images className="w-4 h-4 text-primary font-bold stroke-3" />
          <a href="#gallery">Galería</a>
        </li>
        <li
          onClick={() => handlePanel(false)}
          className="hover:text-[#9fe3d9] transition-all duration-300 flex items-center font-medium gap-2 justify-center sm:justify-start"
        >
            <Star className="w-4 h-4 text-primary font-bold stroke-3" />
          <a href="#testimonials">Testimonios</a>
        </li>
        <li
          onClick={() => handlePanel(false)}
          className="hover:text-[#9fe3d9] transition-all duration-300 flex items-center font-medium gap-2 justify-center sm:justify-start"
        >
            <MapPin className="w-4 h-4 text-primary font-bold stroke-3" />
          <a href="#location">Ubicación</a>
        </li>
        <li
          onClick={() => handlePanel(false)}
          className="hover:text-[#9fe3d9] transition-all duration-300 flex items-center font-medium gap-2 justify-center sm:justify-start"
        >
            <Contact className="w-4 h-4 text-primary font-bold stroke-3" />
          <a href="#contact">Contacto</a>
        </li>
        {/* <li className={"flex justify-center w-full"} onClick={() => handlePanel(false)}>
          <ScheduleButton />
        </li> */}
      </ul>
    </div>
  );
};