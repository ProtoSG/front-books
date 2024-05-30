import { useEffect, useState } from "react"
import { getBook } from "../services/book_service"

interface Book {
  description: string,
  id_author: number,
  id_book: string,
  name: string,
  url_img: string
}

export const useBook = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getBook();
        setBooks(data)
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [])
  return { books, loading, error }
}

