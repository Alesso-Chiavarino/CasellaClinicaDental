interface ISelectInputProps {
    name: string;
    value: string;
    placeholder: string;
    keyName: string;
    children: React.ReactNode;
    isMandatory: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectInput = ({name, value, handleChange, placeholder, children, keyName, isMandatory}: ISelectInputProps) => {
  return (
    <div>
      <div className="flex gap-1">
        {isMandatory && <span className="text-[#15b7a7]">*</span>}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {name}
        </label>
      </div>
          <select
            name={keyName}
            value={value.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            {children}
          </select>
    </div>
  )
}
