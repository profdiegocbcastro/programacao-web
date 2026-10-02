import { relations, sql, type SQL } from 'drizzle-orm';
import { type AnySQLiteColumn, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { matriculas } from '../matriculas/matricula.schema';

export const cursos = sqliteTable('cursos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  titulo: text('titulo').notNull().unique(),
  cargaHoraria: integer('carga_horaria').notNull().default(40),
  ativo: integer('ativo', { mode: 'boolean' }).notNull().default(true),
  resumo: text('resumo').generatedAlwaysAs(
    (): SQL => sql`${cursos.titulo} || ' (' || ${cursos.cargaHoraria} || 'h)'`,
    { mode: 'stored' },
  ),
  prerequisitoId: integer('prerequisito_id').references(
    (): AnySQLiteColumn => cursos.id,
  ),
});

export const cursosRelations = relations(cursos, ({ many, one }) => ({
  matriculas: many(matriculas),

  // um curso tem NO MÁXIMO 1 pré-requisito -> one
  prerequisito: one(cursos, {
    fields: [cursos.prerequisitoId],
    references: [cursos.id],
    relationName: 'prerequisito',
  }),

  // o mesmo curso pode ser pré-requisito de VÁRIOS outros -> many
  cursosQueExigem: many(cursos, {
    relationName: 'prerequisito',
  }),
}));

export type Curso = typeof cursos.$inferSelect;
export type NovoCurso = typeof cursos.$inferInsert;
