import { useEffect, useState } from 'react'
import { getBookById } from '../services/book_service'

interface Book {
  description: string,
  authors: string[],
  id: string,
  title: string,
  url_img: string
}

export const useBookById = (bookId: string) => {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchBook = async (id: string) => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };
    fetchBook(bookId);
  }, [bookId]);

  return { book }
}

