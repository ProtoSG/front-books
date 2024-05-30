import { useParams } from "react-router-dom"
import { useBookById } from "../hooks/useBookById";

export const Book = () => {
  const { bookId } = useParams<{ bookId: string }>(); // Asegúrate de que bookId tenga el tipo adecuado

  console.log(bookId)
  if (!bookId) {
    return <div className="flex justify-center items-center pt-24 ">Error: Book ID is missing</div>;
  }

  const { book } = useBookById(bookId);
  console.log(book)

  if (!book) {
    return <div className="flex justify-center items-center pt-24 ">Loading...</div>;
  }

  return (
    <>
      <article className="pt-24 max-w-[432px] mx-auto">
        <img src={book.url_img} alt={book.title} className="h-96 rounded-2xl" />
        <div className="flex flex-col justify-between">
          <div className="flex gap-2">
            <h2 className="uppercase font-bold texlt-xl">{book.title}</h2>
            {book.authors.map((author: any, index: any) => (
              <small key={index} className="border-2 border-primary rounded-2xl px-2">{author}</small>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-semibold text-lg">Reseña</h4>
            <p className="text-balance">{`${book.description}`}</p>
          </div>
        </div>
      </article>
    </>
  )
}

