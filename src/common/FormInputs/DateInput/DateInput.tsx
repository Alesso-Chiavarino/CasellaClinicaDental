import { Datepicker } from "flowbite-react";

interface IDateInputProps {
    name: string;
    value: string;
    keyName: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput = ({name, value, handleChange, placeholder, keyName}: IDateInputProps) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        {name}
        </label>
        <Datepicker
        onChange={(date: Date) =>
            handleChange({
                target: {
                    name: keyName,
                    value: date.toLocaleDateString("es-AR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    }),
                },
            })
        }
        />
    </div>
  )
}
