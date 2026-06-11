import { cookies } from "next/headers"
import { Suspense } from "react"
import StaticInfo from "./_components/StaticInfo"
import CursosClient from "./_components/CursosClient"
import { columns } from "./_config/columns"
import { DataTable } from "@/components/data-table"

async function fetchCursosSSR(token) {
  const res = await fetch("http://localhost:3000/api/cursos", {
    cache: "no-store",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })
  if (!res.ok) return []
  return res.json()
}

export default async function CursosHibrido() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  const cursosSSR = await fetchCursosSSR(token)
  const requestTime = new Date().toLocaleString("pt-BR")

  return (
    <div className="container mx-auto py-10 space-y-6">
      <Suspense fallback={
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-yellow-700 text-sm">
          Carregando dados estáticos...
        </div>
      }>
        <StaticInfo />
      </Suspense>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
        <h2 className="font-semibold text-blue-800 mb-2">
          Server Side (SSR) — buscado no servidor a cada requisição
        </h2>
        <p className="text-sm text-blue-700 mb-3">Requisição feita às: {requestTime}</p>
        <DataTable columns={columns} data={cursosSSR} />
      </div>

      <CursosClient initialData={cursosSSR} />
    </div>
  )
}
