import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function Navbar() {

  return (

    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-primary">
          Sistema Escolar
        </h1>

        <nav className="flex gap-2">
          <Link to="/">
            <Button variant="ghost">
              Home
            </Button>
          </Link>
          <Link to="/alunos">
            <Button variant="ghost">
              Alunos
            </Button>
          </Link>
        </nav>

      </div>
    </header>

  )
}