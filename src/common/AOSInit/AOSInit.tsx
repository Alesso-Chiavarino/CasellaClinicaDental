import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({ startEvent: 'DOMContentLoaded', once: true, offset: 80 })
  }, []);

  return null;
}