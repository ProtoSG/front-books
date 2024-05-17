import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login_SignUp } from "./pages/Login_SignUp"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login-signup" element={<Login_SignUp />} />
    </Routes>
  )
}

export default App
