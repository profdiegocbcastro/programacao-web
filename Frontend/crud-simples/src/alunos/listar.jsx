import { useQuery, useQueryClient } from "@tanstack/react-query"
import { columns } from "./columns"
import { CreateAlunoModal } from "./criar"
import { DeleteAlunoModal } from "./deletar"
import { EditAlunoModal } from "./editar"
import { ViewAlunoModal } from "./visualizar"
import { DataTable } from "@/components/data-table"
import { api } from "./services/api"

async function fetchAlunos() {
  const response = await api.get("/alunos")
  return response.data
}

export function ListaAlunos() {

  const { data: alunos = [], isLoading } = useQuery({
    queryKey: ["alunos"],
    queryFn: fetchAlunos,
  })

 if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          Carregando...
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white p-6 rounded-2xl shadow-xl">

        <DataTable
          columns={columns}
          data={alunos}
          viewAction={(item) => <ViewAlunoModal aluno={item} />}

          editAction={(item) => (
            <EditAlunoModal aluno={item} />
          )}

          deleteAction={(item) => (
            <DeleteAlunoModal aluno={item} />
          )}
        >
          <CreateAlunoModal />
        </DataTable>

      </div>
    </div>
  )
}