import { Close } from "../../icons/Close"
import { Input } from "../UI/Input"

export const AddPost = () => {

  const handleClose = () => {
    const dialog = document.getElementById('dialog-add-post')
    dialog.close()
  }

  return (
    <dialog id="dialog-add-post" className="bg-bg text-white rounded-2xl m-auto border-none px-10 py-3 transition-all  w-[95%] lg:w-full backdrop:backdrop-blur-sm backdrop:bg-black/50  max-w-[500px] fixed">
      <h3 className="text-2xl text-center my-4">Crear Publicación</h3>
      <span
        className="absolute top-8 right-5 cursor-pointer hover:scale-125 hover:text-primary hover:font-bold transition-transform"
        onClick={handleClose}
      >
        <Close />
      </span>
      <hr className="border-secundary" />
      <form className="my-6 flex flex-col gap-8">
        <label className="flex flex-col">
          Autor:
          <Input type="text" placeholder="Mario Vargas Llosa..." />
        </label>
        <label className="flex flex-col">
          Descripción:
          <textarea
            className="border-2 border-secundary rounded-3xl h-44 resize-none px-5 py-2 mt-2 bg-bg"
            placeholder="La ciudad y los perros es la primera novela del escritor peruano Mario Vargas Llosa..."
          />
        </label>
        <label className="flex flex-col">
          URL de la imagen:
          <Input type="text" placeholder="https/portada_de..." />
        </label>
        <button className="bg-primary p-4 rounded-full hover:bg-primary/70 transition-all">
          Publicar
        </button>
      </form>
    </dialog>
  )
}

