export default function Header() {
  return (
    <header className="bg-bg lg:grid grid-cols-3 items-center fixed left-0 z-50 px-10 py-4 w-full">
      <h1 className="hidden lg:block">BiblioPoint</h1>
      <form className="flex items-center justify-center">
        <input
          className="border-2 px-4 py-2 w-[432px] border-primary rounded-full p-1 bg-bg"
          type="text"
          placeholder="Buscar..."
        />
      </form>
      <div className="hidden lg:block font-bold flex justify-end items-center gap-2">
        <button className="hover:scale-110 transition-transform">Iniciar Sesión</button>
        <span>/</span>
        <button className="underline text-primary hover:scale-110 transition-transform">Registrarse</button>
      </div>
    </header>
  )
}

