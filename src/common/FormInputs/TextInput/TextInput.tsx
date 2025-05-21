interface ITextInputProps {
    name: string;
    value: string;
    keyName: string;
    isMandatory: boolean;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({name, value, handleChange, keyName, isMandatory, placeholder}: ITextInputProps) => {
  return (
    <div>
        <div className="flex gap-1" >
          {isMandatory && <span className="text-[#15b7a7]">*</span>}
          <label className="block text-sm font-medium text-gray-700 mb-1">
              {name}
          </label>
        </div>
        <input
        name={keyName}
        type="text"
        value={value.name}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md p-2"
        />
    </div>
  )
}
