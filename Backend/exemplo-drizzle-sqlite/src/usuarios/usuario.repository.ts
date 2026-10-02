import { eq, like } from 'drizzle-orm';
import { db } from '../server';
import { usuarios } from './usuario.schema';

export const usuarioRepository = {
  listar: (nome?: string) =>
    db
      .select()
      .from(usuarios)
      .where(nome ? like(usuarios.nome, `%${nome}%`) : undefined)
      .orderBy(usuarios.nome),

  buscarPorId: (id: number) =>
    db.query.usuarios.findFirst({
      where: (u, ops) => ops.eq(u.id, id),
      with: {
        matriculas: {
          columns: { id: true, status: true, nota: true },
          with: { curso: { columns: { id: true, titulo: true } } },
        },
      },
    }),

  buscarPorEmail: (email: string) =>
    db
      .select()
      .from(usuarios)
      .where(eq(usuarios.email, email))
      .then((linhas) => linhas.at(0)),

  criar: (dados: typeof usuarios.$inferInsert) =>
    db
      .insert(usuarios)
      .values(dados)
      .returning()
      .then((linhas) => linhas[0]!),

  atualizar: (id: number, dados: Partial<typeof usuarios.$inferInsert>) =>
    db
      .update(usuarios)
      .set(dados)
      .where(eq(usuarios.id, id))
      .returning()
      .then((linhas) => linhas.at(0)),

  remover: (id: number) =>
    db
      .delete(usuarios)
      .where(eq(usuarios.id, id))
      .returning()
      .then((linhas) => linhas.at(0)),
};
