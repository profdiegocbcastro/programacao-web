import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { matriculas } from '../matriculas/matricula.schema';

export const usuarios = sqliteTable('usuarios', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nome: text('nome').notNull(),
  email: text('email').notNull().unique(),
  criadoEm: integer('criado_em', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const usuariosRelations = relations(usuarios, ({ many }) => ({
  matriculas: many(matriculas),
}));
