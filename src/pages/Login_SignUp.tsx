import { useState } from "react"
import { Login } from "../components/login-signup/Login"
import { SignUp } from "../components/login-signup/SingUp"

export const Login_SignUp = () => {
  const [activeSignUp, setActiveSignUp] = useState(false)

  const handleActiveSignUp = () => {
    setActiveSignUp(!activeSignUp)
  }


  return (
    <main className="flex justify-center items-center h-screen">
      <Login activeSignUp={activeSignUp} handleActiveSignUp={handleActiveSignUp} />
      <SignUp activeSignUp={activeSignUp} handleActiveSignUp={handleActiveSignUp} />
    </main >
  )
}

