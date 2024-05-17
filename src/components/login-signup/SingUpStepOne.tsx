import { FC } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

interface PropsSignUpStepOne {
  value: { nombre: string; apellido: string };
  handleNext: () => void;
  handleActiveSignUp: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignUpStepOne: FC<PropsSignUpStepOne> = ({ value, handleChange, handleNext, handleActiveSignUp }) => (
  <div className="flex flex-col gap-4">
    <Input
      name="nombre"
      onChange={handleChange}
      label="Nombre:"
      type="text"
      value={value.nombre}
      placeholder="Ingresa tu nombre..."
    />
    <Input
      name="apellido"
      onChange={handleChange}
      label="Apellido:"
      type="text"
      value={value.apellido}
      placeholder="Ingresa tus apellidos..."
    />
    <p>
      ¿Ya tienes una cuenta?
      <span onClick={handleActiveSignUp} className="ml-2 text-primary cursor-pointer hover:underline">
        Inicia Sesión
      </span>
    </p>
    <Button onClick={handleNext} type="button" text="Siguiente" />
  </div>
);
