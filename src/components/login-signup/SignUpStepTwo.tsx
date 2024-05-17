import { FC } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

interface PropsSignUpStepTwo {
  value: { usuario: string; password: string; confirmPassword: string };
  handleActiveSignUp: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignUpStepTwo: FC<PropsSignUpStepTwo> = ({ value, handleChange, handleActiveSignUp }) => (
  <div className="flex flex-col gap-4">
    <Input
      name="usuario"
      onChange={handleChange}
      label="Usuario:"
      type="text"
      value={value.usuario}
      placeholder="Ingresa tu nombre de usuario..."
    />
    <Input
      name="confirmPassword"
      onChange={handleChange}
      label="Contraseña:"
      type="password"
      value={value.confirmPassword}
      placeholder="Crea tu contraseña..."
    />
    <Input
      name="password"
      onChange={handleChange}
      label="Confirmar Contraseña:"
      type="password"
      value={value.password}
      placeholder="Confirma tu contraseña..."
    />
    <p>
      ¿Ya tienes una cuenta?
      <span onClick={handleActiveSignUp} className="ml-2 text-primary cursor-pointer hover:underline">
        Inicia Sesión
      </span>
    </p>
    <Button text="Registrar" />
  </div>
);
