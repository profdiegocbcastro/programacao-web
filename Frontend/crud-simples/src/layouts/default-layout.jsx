import { Navbar } from "../components/navbar"
import { Outlet } from "react-router-dom"

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
