import { Send } from "lucide-react";

interface IButtonProps {
    title: string;
    disabled: boolean;
    className?: string;
}

export const Button = ({ title, disabled, className }: IButtonProps) => {
  
  return (
    <div className={className}>
        <button
            disabled={disabled}
            type="submit"
            className={`w-full bg-teal-200 hover:bg-teal-300 text-gray-800 font-medium py-2 px-4rounded-md flex justify-center items-center gap-2 transition duration-200ease-in-out rounded-md ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
        <Send className="w-4 h-4" />
        <span>{title}</span>
        </button>
    </div>
  )
}
