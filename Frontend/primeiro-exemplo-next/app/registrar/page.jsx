"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function RegistrarPage() {
  const router = useRouter()
  const [form, setForm] = useState({ nome: "", email: "", senha: "" })
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErro("")
    setCarregando(true)

    try {
      await axios.post("http://localhost:3000/api/auth/registrar", form)
      router.push("/login")
    } catch (err) {
      setErro(err.response?.data?.error || "Erro ao registrar.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm border border-border rounded-xl p-8 shadow-sm bg-card">
        <h1 className="text-2xl font-bold text-center mb-1 text-foreground">Criar conta</h1>
        <p className="text-sm text-center text-muted-foreground mb-6">Registre-se no sistema Cefet</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome" className="text-sm font-medium text-foreground">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className="px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="senha" className="text-sm font-medium text-foreground">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              value={form.senha}
              onChange={handleChange}
              placeholder="••••••••"
              className="px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {erro && (
            <p className="text-sm text-destructive text-center">{erro}</p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="mt-1 py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {carregando ? "Registrando..." : "Criar conta"}
          </button>
        </form>

        <p className="text-xs text-center text-muted-foreground mt-6">
          Já tem conta?{" "}
          <a href="/login" className="text-primary hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  )
}
