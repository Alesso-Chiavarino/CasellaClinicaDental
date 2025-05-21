interface ITelInputProps {
    name: string;
    value: string;
    placeholder: string;
    keyName: string;
    isMandatory: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TelInput = ({name, value, handleChange, placeholder, keyName, isMandatory}: ITelInputProps) => {
  return (
    <div>
      <div className="flex gap-1">
        {isMandatory && <span className="text-[#15b7a7]">*</span>}
        <label className="block text-sm font-medium text-gray-700 mb-1">
         {name}
        </label>
      </div>
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
