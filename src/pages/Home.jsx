import { Like } from "../icons/Like"
import { Comment } from "../icons/Comment"
import { data } from "../data/data"
import { useState } from "react"

const Post = ({ post }) => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <article className="flex flex-col gap-4 mb-9">
      <header className="flex items-center gap-4 px-2">
        <img className="size-16 rounded-full bg-secundary" />
        <span className="font-bold text-xl">{post.user.name}</span>
      </header>
      <main className="flex flex-col gap-4">
        <h3 className="font-bold px-2">Autor: <span>{post.book.author}</span></h3>
        <p
          onClick={handleOpen}
          className="cursor-pointer text-start text-pretty hover:bg-secundary/80 rounded-xl p-2 transition-all">
          {!open ? post.book.description.substring(0, 100) : post.book.description}
          <span
            hidden={open}
            className="text-primary font-bold">
            ... Leer más
          </span>
        </p>
        <img src={post.book.url_img} className="w-[432px] object-cover rounded-3xl h-[320px] bg-primary" />
      </main >
      <footer className="flex gap-8 px-2">
        <button className="flex gap-4 items-center"><Like /> <span>24</span></button>
        <button className="flex gap-4 items-center"><Comment /><span>10</span></button>
      </footer>
    </article >
  )
}

export const Home = () => {
  return (
    <main className="mt-24 max-w-[432px]">
      {
        data.map((post) => (
          <Post key={post.id_post} post={post} />
        ))
      }
    </main>
  )
}
