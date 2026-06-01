import { api } from "./services/api"
import { DeleteModal } from "@/components/delete-modal"

export function DeleteAlunoModal({
  aluno,

  atualizarLista,
}) {
  async function deletarAluno() {
    await api.delete(`/alunos/${aluno.id}`)

    atualizarLista()
  }

  return (
    <DeleteModal
      title={`Deletar Aluno: ${aluno.nome}`}
      onDelete={deletarAluno}
    />
  )
}
