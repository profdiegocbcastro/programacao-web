"use client"

import { useQuery } from "@tanstack/react-query"
import { columns } from "../_config/columns"
import { DataTable } from "@/components/data-table"
import { api } from "../_services/api"

export default function CursosClient({ initialData }) {
  const { data: cursos = [], isLoading, refetch, isFetching } = useQuery({
    queryKey: ["cursos-client"],
    queryFn: async () => {
      const res = await api.get("/cursos")
      return res.data
    },
    initialData,
  })

  return (
    <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-green-800">
          Client Side — React Query
        </h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {isFetching ? "Atualizando..." : "Atualizar"}
        </button>
      </div>
      {isLoading ? (
        <p className="text-sm text-green-700">Carregando...</p>
      ) : (
        <DataTable columns={columns} data={cursos} />
      )}
    </div>
  )
}
