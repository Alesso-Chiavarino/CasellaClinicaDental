interface ITextAreaInputProps {
    name: string;
    value: string;
    placeholder: string;
    keyName: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const TextAreaInput = ({name, value, handleChange, placeholder, keyName, className}: ITextAreaInputProps) => {
  return (
    <div className={className}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {name}
          </label>
          <textarea
            name={keyName}
            value={value.message}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none"
          />
        </div>
  )
}
