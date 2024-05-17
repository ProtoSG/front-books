import { FC } from "react"

interface Props {
  type?: "submit" | "button" | "reset"
  text?: string
  onClick?: () => void
}

export const Button: FC<Props> = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-primary p-4 rounded-full hover:bg-primary/70 transition-all">
      {text}
    </button>
  )
}

