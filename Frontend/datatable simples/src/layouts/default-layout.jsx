import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"

export function DefaultLayout() {

  return (

    <div className="min-h-screen bg-primary/30">

      <Navbar />

      <main className="p-10">
        <Outlet />
      </main>

    </div>
  )
}