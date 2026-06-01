import { useEffect, useState } from "react"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { api } from "./services/api"

export function ListaAlunos() {

  const [alunos, setAlunos] = useState([])

  async function carregarAlunos() {

      const response = await api.get("/alunos")
      setAlunos(response.data)

  }

  useEffect(() => {
    carregarAlunos()
  }, [])

  return (

    <div className="container mx-auto py-10">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <DataTable
          columns={columns}
          data={alunos}
        />
      </div>
    </div>

  )
}