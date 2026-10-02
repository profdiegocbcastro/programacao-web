import { count, eq, sql } from 'drizzle-orm';
import { db } from '../server';
import { matriculas } from '../matriculas/matricula.schema';
import { cursos, type NovoCurso } from './curso.schema';

export const cursoRepository = {
  listar: () => db.select().from(cursos).orderBy(cursos.titulo),

  buscarPorId: (id: number) =>
    db.query.cursos.findFirst({
      where: (c, ops) => ops.eq(c.id, id),
      with: {
        matriculas: {
          columns: { status: true, nota: true },
          with: { usuario: { columns: { id: true, nome: true } } },
        },
        prerequisito: { columns: { id: true, titulo: true } },
        cursosQueExigem: { columns: { id: true, titulo: true } },
      },
    }),

  buscarPorTitulo: (titulo: string) =>
    db
      .select()
      .from(cursos)
      .where(eq(cursos.titulo, titulo))
      .then((linhas) => linhas.at(0)),

  criar: (dados: NovoCurso) =>
    db
      .insert(cursos)
      .values(dados)
      .returning()
      .then((linhas) => linhas[0]!),

  relatorio: () =>
    db
      .select({
        cursoId: cursos.id,
        titulo: cursos.titulo,
        totalAlunos: count(matriculas.id),
        mediaNotas: sql<number | null>`round(avg(${matriculas.nota}), 2)`,
      })
      .from(cursos)
      .leftJoin(matriculas, eq(matriculas.cursoId, cursos.id))
      .groupBy(cursos.id)
      .orderBy(cursos.titulo),
};
