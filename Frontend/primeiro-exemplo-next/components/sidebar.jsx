"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { BookOpen, GraduationCap, Layers, LayoutDashboard, LogOut, Menu, RefreshCw, X } from "lucide-react"
import { removeToken } from "@/lib/auth"

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/alunos", label: "Listar Alunos", icon: GraduationCap },
  { href: "/cursos", label: "Cursos", icon: Layers },
]

const AUTH_ROUTES = ["/login", "/registrar"]

export default function SidebarMenu() {
  const pathname = usePathname()
  if (AUTH_ROUTES.includes(pathname)) return null
  return <Sidebar />
}

export function Sidebar() {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  function handleLogout() {
    removeToken()
    router.push("/login")
  }

  return (
    <aside
      className={`flex flex-col min-h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ${open ? "w-60" : "w-16"}`}
    >
      <div className="flex items-center justify-between px-3 py-5 border-b border-sidebar-border">
        {open && (
          <h1 className="text-lg font-bold text-sidebar-primary truncate">Cefet</h1>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="p-1.5 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors ml-auto"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex flex-col gap-1 p-2 flex-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            title={!open ? label : undefined}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {open && <span>{label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-2 border-t border-sidebar-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          title={!open ? "Sair" : undefined}
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {open && <span>Sair</span>}
        </button>
      </div>
    </aside>
  )
}
