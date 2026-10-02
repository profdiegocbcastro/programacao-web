import { and, eq } from 'drizzle-orm';
import { db } from '../server';
import { cursos } from '../cursos/curso.schema';
import { matriculaRepository } from './matricula.repository';
import { matriculas } from './matricula.schema';

export const matriculaService = {
  listar: (usuarioId?: number) =>
    usuarioId === undefined
      ? matriculaRepository.listar()
      : matriculaRepository.listarPorUsuario(usuarioId),

  matricular: (usuarioId: number, cursoId: number) =>
    db.transaction((tx) => {
      const curso = tx
        .select()
        .from(cursos)
        .where(eq(cursos.id, cursoId))
        .get();
      if (!curso) throw new Error('curso nao encontrado');
      if (!curso.ativo) throw new Error('curso inativo');

      const existente = tx
        .select()
        .from(matriculas)
        .where(
          and(
            eq(matriculas.usuarioId, usuarioId),
            eq(matriculas.cursoId, cursoId),
          ),
        )
        .get();
      if (existente) throw new Error('aluno ja matriculado nesse curso');

      return tx
        .insert(matriculas)
        .values({ usuarioId, cursoId })
        .returning()
        .get();
    }),

  concluir: (id: number, nota: number) => {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      throw new Error('nota deve estar entre 0 e 10');
    }
    return matriculaRepository.atualizarStatus(id, 'concluida', nota);
  },

  remover: (id: number) => matriculaRepository.remover(id),
};
