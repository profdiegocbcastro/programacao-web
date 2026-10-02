import { cursoRepository } from './curso.repository';
import type { NovoCurso } from './curso.schema';

export const cursoService = {
  listar: () => cursoRepository.listar(),

  buscarPorId: (id: number) => cursoRepository.buscarPorId(id),

  criar: async (dados: NovoCurso) => {
    const existente = await cursoRepository.buscarPorTitulo(dados.titulo);
    if (existente) throw new Error('ja existe um curso com esse titulo');
    return cursoRepository.criar(dados);
  },

  relatorio: () => cursoRepository.relatorio(),
};
