import { useBook } from "../hooks/useBook"
import { Close } from "../icons/Close";
import { Link } from "react-router-dom";

export const Books = () => {
  const { books, loading, error } = useBook();
  console.log(books)
  if (loading) {
    return (<div className="pt-28">Cargando...</div>)
  }

  if (error) {
    return (<div>Error: {error}</div>)
  }

  const handleOpen = (id: string) => {
    const dialog = document.getElementById(`book_dialog_${id}`)
    dialog.showModal()
  }

  const handleClose = (id: string) => {
    const dialog = document.getElementById(`book_dialog_${id}`)
    dialog.close()
  }

  return (
    <main className="py-28 max-w-[864px] mx-auto grid grid-cols-3 gap-10">
      {books.map((book) => (
        <>
          <article
            onClick={() => handleOpen(book.id_book)}
            key={book.id_book}
            className="h-auto overflow-hidden hover:scale-110 transition-all duration-500 hover:shadow-2xl cursor-pointer"
          >
            {

              <img src={book.url_img} alt={book.name} className="object-cover object-center w-full h-96 rounded-2xl" />
            }
            <h2 className="pt-2 text-center font-bold text-lg">{book.name}</h2>
          </article>
          <dialog
            id={`book_dialog_${book.id_book}`}
            className="bg-bg text-white rounded-2xl m-auto border-none p-10 transition-all backdrop:backdrop-blur-sm backdrop:bg-black/50 fixed outline-0 "
          >{
              <article className="flex w-[920px] gap-10 h-80">
                <Close onClick={() => handleClose(book.id_book)} />
                {
                  <img src={book.url_img} alt={book.name} className="h-full rounded-2xl" />
                }
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2">
                    <h2 className="uppercase font-bold texlt-xl">{book.name}</h2>
                    {/* {book.authors.map((author, index) => ( */}
                    {/*   <small key={index} className="border-2 border-primary rounded-2xl px-2">{author}</small> */}
                    {/* ))} */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-primary font-semibold text-lg">Reseña</h4>
                    <p className="text-balance">{`${book.description.substring(0, 600)}...`}</p>
                  </div>
                  <div className="text-end">
                    <Link
                      className="bg-primary px-12 py-4 rounded-full hover:bg-primary/70 transition-all outline-0"
                      to={`/book/${book.id_book}`}>Ver Página</Link>
                  </div>
                </div>
              </article>
            }
          </dialog>
        </>
      ))
      }
    </main >
  )
}

