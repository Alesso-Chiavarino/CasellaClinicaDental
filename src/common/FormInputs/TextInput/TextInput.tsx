interface ITextInputProps {
    name: string;
    value: string;
    keyName: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({name, value, handleChange, keyName}: ITextInputProps) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {name}
        </label>
        <input
        name={keyName}
        type="text"
        value={value.name}
        onChange={handleChange}
        placeholder="Tu nombre completo"
        className="w-full border border-gray-300 rounded-md p-2"
        />
    </div>
  )
}
