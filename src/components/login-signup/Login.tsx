import { FC } from "react"
import { Button } from "../UI/Button"
import { Input } from "../UI/Input"

interface Props {
  activeSignUp: boolean
  handleActiveSignUp: () => void
}

export const Login: FC<Props> = ({ activeSignUp, handleActiveSignUp }) => {
  return (
    <article className={`flex flex-col gap-4 items-center ${activeSignUp ? "hidden" : "block"}`}>
      <h1 className="text-4xl font-bold tracking-[10px] uppercase ">Blibio Point</h1>
      <form className="flex flex-col gap-4">
        <Input label="Usuario:" type="text" placeholder="Ingresa su nombre de usuario..." />
        <Input label="Contraseña:" type="password" placeholder="Ingresa su contraseña..." />
        <p>
          ¿No tienes una cuenta?
          <span onClick={handleActiveSignUp} className="ml-2 text-primary cursor-pointer hover:underline">
            Regístrate
          </span>
        </p>
        <Button text="Iniciar Sesión" />
      </form>
    </article>
  )
}

