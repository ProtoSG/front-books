import { Like } from "../../icons/Like"
import { Comment } from "../../icons/Comment"
import { data } from "../../data/data"
import { useState } from "react"
import { Input } from "../UI/Input"

const Post = ({ post }) => {

  const [openDescription, setOpenDescription] = useState(false)
  const [openComments, setOpenComments] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [vote, setVote] = useState(false)

  const handleOpenDescription = () => {
    setOpenDescription(!openDescription)
  }

  const handleOpenComments = () => {
    setOpenComments(!openComments)
  }

  const handleLike = () => {
    setVote(!vote)
    if (vote) {
      setLikes(likes - 1)
    } else
      setLikes(likes + 1)
  }

  return (
    <article className="flex flex-col gap-4 mb-9 w-full">
      <header className="flex items-center gap-4 px-2">
        <img className="size-16 rounded-full bg-secundary" />
        <span className="font-bold text-xl">{post.user.name}</span>
      </header>
      <main className="flex flex-col gap-4">
        <h3 className="font-bold px-2">Autor: <span>{post.book.author}</span></h3>
        <p
          onClick={handleOpenDescription}
          className="cursor-pointer text-start text-pretty hover:bg-secundary/80 rounded-xl p-2 transition-all">
          {!openDescription ? post.book.description.substring(0, 100) : post.book.description}
          <span
            hidden={openDescription}
            className="text-primary font-bold">
            ... Leer más
          </span>
        </p>
        <img src={post.book.url_img} className="w-[432px] object-cover rounded-3xl h-[320px] bg-primary" />
      </main >
      <footer className="flex gap-8 px-2">
        <button
          onClick={handleLike}
          className="flex gap-4 items-center"
        >
          <Like className={`hover:fill-primary ${vote && "fill-primary"}`} />
          <span>{likes}</span>
        </button>
        <button
          onClick={handleOpenComments}
          className="flex gap-4 items-center">
          <Comment />
          <span>{post.comments.length}</span>
        </button>
      </footer>
      <section className={`h-full pl-6 ${openComments ? "flex" : "hidden"}`}>
        <div className="border-secundary h-auto border-[1px]"></div>
        <div className="flex gap-4 flex-col px-2 w-full">
          {
            post.comments.map((comment) => (
              <div key={comment.id_comment} className="flex gap-4 px-2">
                <img src={comment.user.avatar} className="size-12 my-auto rounded-full bg-secundary" />
                <div className="flex w-full">
                  <div className="flex flex-col w-full gap-2">
                    <span className="font-bold">{comment.user.name}</span>
                    <p>{comment.comment}</p>
                  </div>
                  <button className="w-24 flex gap-4 items-center">
                    <Like />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <form>
        <Input type="text" placeholder="Escribe un comentario..." />
      </form>
    </article >
  )
}

export const MainHome = () => {
  return (
    <main className="mt-24 max-w-[432px] mx-auto">
      {
        data.map((post) => (
          <Post key={post.id_post} post={post} />
        ))
      }
    </main>
  )
}
