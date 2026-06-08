import { ViewModal } from "@/components/view-modal"

export function ViewAlunoModal({ aluno }) {
  return (
    <ViewModal
      title="Visualizar Aluno"
      items={[
        {
          label: "ID",
          value: aluno.id,
        },

        {
          label: "Nome",
          value: aluno.nome,
        },

        {
          label: "Email",
          value: aluno.email,
        },
      ]}
    />
  )
}
