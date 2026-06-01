import { api } from "./services/api"
import { FormModal } from "@/components/form-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function CreateAlunoModal({ atualizarLista }) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  async function criarAluno(e, setOpen) {
    e.preventDefault()

    await api.post("/alunos", {
      nome,
      email,
    })

    setNome("")
    setEmail("")

    atualizarLista()

    setOpen(false)
  }

  return (
    <FormModal title="Novo Aluno" triggerText="Adicionar Aluno">
      {({ setOpen }) => (
        <form
          onSubmit={(e) => criarAluno(e, setOpen)}
          className="space-y-4 mt-4"
        >
          <div className="space-y-2">
            <Label>Nome</Label>

            <Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome"
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email"
            />
          </div>

          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </form>
      )}
    </FormModal>
  )
}
