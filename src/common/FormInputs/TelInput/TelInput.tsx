interface ITelInputProps {
    name: string;
    value: string;
    placeholder: string;
    keyName: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TelInput = ({name, value, handleChange, placeholder, keyName}: ITelInputProps) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
         {name}
        </label>
        <input
            name={keyName}
            type="tel"
            value={value.phone}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-md p-2"
        />
    </div>
  )
}
