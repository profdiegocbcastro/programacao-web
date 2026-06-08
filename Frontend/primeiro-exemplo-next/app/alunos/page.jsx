'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { columns } from "./_config/columns"
import { CreateAlunoModal } from "./_components/criar"
import { DeleteAlunoModal } from "./_components/deletar"
import { EditAlunoModal } from "./_components/editar"
import { ViewAlunoModal } from "./_components/visualizar"
import { DataTable } from "@/components/data-table"
import { api } from "./_services/api"

async function fetchAlunos() {
  const response = await api.get("/alunos")
  return response.data
}

export default function ListaAlunos() {

  const { data: alunos = [], isLoading, refetch } = useQuery({
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
            <EditAlunoModal aluno={item}  atualizarLista={refetch}/>
          )}

          deleteAction={(item) => (
            <DeleteAlunoModal aluno={item} atualizarLista={refetch} />
          )}
        >
          <CreateAlunoModal  atualizarLista={refetch}/>
        </DataTable>

      </div>
    </div>
  )
}