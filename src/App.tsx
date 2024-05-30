import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login_SignUp } from "./pages/Login_SignUp"
import { Books } from "./pages/Books"
import { Layout } from "./pages/Layout"
import { Book } from "./pages/Book"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Route>
      <Route path="/login-signup" element={<Login_SignUp />} />
    </Routes>
  )
}

export default App
