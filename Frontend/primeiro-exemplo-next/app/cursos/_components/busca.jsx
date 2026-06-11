'use client'

import { useState } from 'react'
import { Search, BookOpen, Clock } from 'lucide-react'

export default function BuscaInterativa({ cursos }) {
  const [busca, setBusca] = useState('')

  const cursosFiltrados = cursos.filter(curso =>
    curso.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div>
      <div className="relative mb-4">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Digite para filtrar cursos..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400"
        />
      </div>

      {busca && cursosFiltrados.length === 0 ? (
        <p className="text-gray-400 text-sm">Nenhum curso encontrado para &quot;{busca}&quot;.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cursosFiltrados.map(curso => (
            <div key={curso.id} className="border border-purple-100 bg-purple-50 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-purple-600 shrink-0" />
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

      <p className="text-xs text-gray-400 mt-3">
        Mostrando {cursosFiltrados.length} de {cursos.length} cursos
      </p>
    </div>
  )
}
