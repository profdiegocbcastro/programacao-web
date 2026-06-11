import { unstable_cache } from "next/cache"

const getStaticData = unstable_cache(
  async () => {
    const res = await fetch("http://localhost:3000/api/cursos")
    const cursos = await res.json()
    console.log(cursos)
    return {
      geradoEm: new Date().toISOString(),
      totalCursos: Array.isArray(cursos) ? cursos.length : 0,
    }
  },
  ["static-cursos-info"],
  { revalidate: 3600 }
)

export default async function StaticInfo() {
  const { geradoEm, totalCursos } = await getStaticData()

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
      <h2 className="font-semibold text-yellow-800 mb-2">
        Static (ISR) — gerado no build, revalidado a cada hora
      </h2>
      <p className="text-sm text-yellow-700">Snapshot gerado em: {geradoEm}</p>
      <p className="text-sm text-yellow-700">Total de cursos no snapshot: {totalCursos}</p>
    </div>
  )
}
