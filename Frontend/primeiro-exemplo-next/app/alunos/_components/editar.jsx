import { api } from "../_services/api"
import { EditModal } from "@/components/edit-modal"

export function EditAlunoModal({ aluno, atualizarLista }) {
  async function atualizarAluno(form) {
    await api.put(`/alunos/${aluno.id}`, {
      nome: form.nome,
      email: form.email,
    })

    atualizarLista()
  }

  return (
    <EditModal
      title="Editar Aluno"
      fields={{
        nome: aluno.nome,
        email: aluno.email,
      }}
      onSubmit={atualizarAluno}
    />
  )
}
