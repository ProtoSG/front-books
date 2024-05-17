import { Link } from "react-router-dom";
import { User } from "../../icons/User";
import { Input } from "../UI/Input";

export const Header = () => {
  return (
    <header className="bg-bg lg:grid grid-cols-3 items-center fixed top-0 z-50 px-10 py-4 w-full">
      <h1 className="hidden lg:block">BiblioPoint</h1>
      <form className="flex items-center justify-center">
        <Input type="text" placeholder="Buscar..." />
      </form>
      <div className="flex font-bold justify-end bg-red-400 items-center gap-2">
        <Link to="/login-signup" className="flex lg:hidden absolute top-6 hover:scale-125 transition-all">
          <User className="size-8" />
        </Link>
        <div className="hidden lg:flex">
          <button className="hover:scale-110 transition-transform">Iniciar Sesión</button>
          <span>/</span>
          <button className="underline text-primary hover:scale-110 transition-transform">Registrarse</button>
        </div>
      </div>
    </header>
  )
}

