import { eq } from 'drizzle-orm';
import { db } from '../server';
import { cursos } from '../cursos/curso.schema';
import { usuarios } from '../usuarios/usuario.schema';
import { matriculas } from './matricula.schema';

export const matriculaRepository = {
  listar: () =>
    db
      .select({
        id: matriculas.id,
        aluno: usuarios.nome,
        curso: cursos.titulo,
        status: matriculas.status,
        nota: matriculas.nota,
        matriculadoEm: matriculas.matriculadoEm,
      })
      .from(matriculas)
      .innerJoin(usuarios, eq(matriculas.usuarioId, usuarios.id))
      .innerJoin(cursos, eq(matriculas.cursoId, cursos.id))
      .orderBy(matriculas.id),

  listarPorUsuario: (usuarioId: number) =>
    db.query.matriculas.findMany({
      where: (m, ops) => ops.eq(m.usuarioId, usuarioId),
      with: { curso: true },
      orderBy: (m, ops) => ops.desc(m.matriculadoEm),
    }),

  criar: (dados: typeof matriculas.$inferInsert) =>
    db
      .insert(matriculas)
      .values(dados)
      .returning()
      .then((linhas) => linhas[0]!),

  atualizarStatus: (
    id: number,
    status: 'ativa' | 'trancada' | 'concluida',
    nota: number | null,
  ) =>
    db
      .update(matriculas)
      .set({ status, nota })
      .where(eq(matriculas.id, id))
      .returning()
      .then((linhas) => linhas.at(0)),

  remover: (id: number) =>
    db
      .delete(matriculas)
      .where(eq(matriculas.id, id))
      .returning()
      .then((linhas) => linhas.at(0)),
};
