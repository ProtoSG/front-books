import { useState, useCallback, FC, useEffect } from 'react';
import { SignUpStepOne } from './SingUpStepOne';
import { SignUpStepTwo } from './SignUpStepTwo';
import { ArrowLeft } from '../../icons/ArrowLeft';

interface Props {
  activeSignUp: boolean;
  handleActiveSignUp: () => void;
}

export const SignUp: FC<Props> = ({ activeSignUp, handleActiveSignUp }) => {
  const [next, setNext] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'nombre') setNombre(value);
    if (name === 'apellido') setApellido(value);
    if (name === 'usuario') setUsuario(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
    if (name === 'password') setPassword(value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ nombre, apellido, usuario, confirmPassword, password });
  }, [nombre, apellido, usuario, confirmPassword, password]);

  const handleNext = () => {
    setNext(!next)
  }

  return (
    <article className={`flex flex-col gap-4 items-center ${activeSignUp ? 'block' : 'hidden'}`}>
      <header className={`flex  items-center w-full transition-all ${next ? "justify-between" : "justify-center"}`}>
        {
          next && (
            <button
              onClick={handleNext}
              className="text-primary"
            >
              <ArrowLeft className='size-14' />
            </button>
          )
        }
        <h1 className="text-4xl font-bold tracking-[10px] uppercase">Regístrate</h1>
      </header>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {!next ? (
          <SignUpStepOne value={{ nombre, apellido }} handleChange={handleChange} handleNext={handleNext} handleActiveSignUp={handleActiveSignUp} />
        ) : (
          <SignUpStepTwo value={{ usuario, confirmPassword, password }} handleChange={handleChange} handleActiveSignUp={handleActiveSignUp} />
        )}
      </form>
    </article>
  );
};


