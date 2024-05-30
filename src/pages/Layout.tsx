import { Outlet } from "react-router-dom"
import { Header } from "../components/home/Header"

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

