import { cookies } from 'next/headers'
import { BookOpen, Clock } from 'lucide-react'
import BuscaInterativa from './busca'
import { fetchCursos } from '../../_services/api'

export default async function ListaDinamica() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  let cursos = []
  let erro = null

  try {
    cursos = await fetchCursos(token, { cache: 'no-store' })
  } catch (e) {
    erro = e.message
  }

  if (erro) {
    return (
      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
        Erro ao buscar cursos: {erro}
      </div>
    )
  }

  return (
    <div>
      {cursos.length === 0 ? (
        <p className="text-gray-500 text-sm">Nenhum curso cadastrado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {cursos.map(curso => (
            <div key={curso.id} className="border rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium text-sm">{curso.nome}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{curso.cargaHoraria}h de carga horária</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t pt-5 mt-2">
        <BuscaInterativa cursos={cursos} />
      </div>
    </div>
  )
}
