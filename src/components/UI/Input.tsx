import { FC } from "react"

interface Props {
  value?: string,
  name?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  type?: string,
  placeholder?: string
}

export const Input: FC<Props> = ({ value, name, onChange, label, type, placeholder }) => {
  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input
        name={name}
        onChange={onChange}
        className="border-2 px-4 py-2 w-[432px] border-secundary rounded-full p-1 bg-bg"
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </label>
  )
}

