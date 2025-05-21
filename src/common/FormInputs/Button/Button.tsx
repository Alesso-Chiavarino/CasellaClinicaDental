import { Send } from "lucide-react";

interface IButtonProps {
    title: string;
    className?: string;
}

export const Button = ({ title, className }: IButtonProps) => {
  return (
    <div className={className}>
        <button
            type="submit"
            className="w-full bg-teal-200 hover:bg-teal-300 text-gray-800 font-medium py-2 px-4rounded-md flex justify-center items-center gap-2 cursor-pointer transition duration-200ease-in-out"
        >
        <Send className="w-4 h-4" />
        <span>{title}</span>
        </button>
    </div>
  )
}
