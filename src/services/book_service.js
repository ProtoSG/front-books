import { api } from '../data/api'
import { get_api } from '../data/api'

const book_api = `${api}/book`
const get_book_api = `${get_api}`

// const cleanBooks = (books) => {
//   const seenBooks = new Set();
//   return books
//     .filter(book => {
//       const volumeInfo = book.volumeInfo
//       const key = `${(volumeInfo.title).toUpperCase()}`
//
//       if (
//         book.id &&
//         volumeInfo.title &&
//         volumeInfo.authors &&
//         volumeInfo.description &&
//         volumeInfo.imageLinks &&
//         volumeInfo.imageLinks.thumbnail &&
//         volumeInfo.language === 'es' &&
//         !seenBooks.has(key)
//       ) {
//         seenBooks.add(key)
//         return true;
//       }
//       return false;
//     })
//     .map(book => ({
//       id: book.id,
//       title: book.volumeInfo.title,
//       authors: book.volumeInfo.authors,
//       description: book.volumeInfo.description,
//       url_img: book.volumeInfo.imageLinks.thumbnail
//     }))
// }

const getBook = async () => {
  const response = await fetch(`${book_api}`)
  if (!response.ok) {
    throw new Error("Hubo un problema al obtener los libros " + response.status)
  }
  const data = await response.json()
  console.log(data.data)
  return data.data
}

const getBookById = async (id) => {
  const response = await fetch(`${get_book_api}/${id}`)
  const data = await response.json()
  const books = []
  books.push(data)
  const [book] = cleanBooks(books)
  console.log(book)
  return book
}

export { getBook, getBookById }
