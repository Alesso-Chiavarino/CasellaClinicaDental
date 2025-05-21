import { Datepicker } from "flowbite-react";

interface IDateInputProps {
    name: string;
    value: string;
    keyName: string;
    isMandatory: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput = ({name, value, handleChange, placeholder, keyName, isMandatory}: IDateInputProps) => {
  return (
    <div>
        <div className="flex gap-1">
            {isMandatory && <span className="text-[#15b7a7]">*</span>}
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {name}
            </label>
        </div>
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
