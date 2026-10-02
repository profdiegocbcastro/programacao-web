import { relations, sql, type SQL } from 'drizzle-orm';
import {
  index,
  integer,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';
import { cursos } from '../cursos/curso.schema';
import { usuarios } from '../usuarios/usuario.schema';

export const matriculas = sqliteTable(
  'matriculas',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    usuarioId: integer('usuario_id')
      .notNull()
      .references(() => usuarios.id, { onDelete: 'cascade' }),
    cursoId: integer('curso_id')
      .notNull()
      .references(() => cursos.id, { onDelete: 'cascade' }),
    status: text('status', { enum: ['ativa', 'trancada', 'concluida'] })
      .notNull()
      .default('ativa'),
    nota: real('nota'),
    aprovado: integer('aprovado', { mode: 'boolean' }).generatedAlwaysAs(
      (): SQL => sql`${matriculas.nota} is not null and ${matriculas.nota} >= 6`,
      { mode: 'stored' },
    ),
    matriculadoEm: integer('matriculado_em', { mode: 'timestamp' })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [
    uniqueIndex('matriculas_usuario_curso_idx').on(t.usuarioId, t.cursoId),
    index('matriculas_curso_idx').on(t.cursoId),
  ],
);

export const matriculasRelations = relations(matriculas, ({ one }) => ({
  usuario: one(usuarios, {
    fields: [matriculas.usuarioId],
    references: [usuarios.id],
  }),
  curso: one(cursos, {
    fields: [matriculas.cursoId],
    references: [cursos.id],
  }),
}));

