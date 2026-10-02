import Database from 'better-sqlite3';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { cursos, matriculas, usuarios } from './schema';

const sqlite = new Database(process.env.DB_FILE ?? 'data/app.db');
sqlite.pragma('foreign_keys = ON');
const db = drizzle(sqlite, { schema });

async function main() {
  await db
    .insert(usuarios)
    .values([
      { nome: 'Ana Souza', email: 'ana@escola.dev' },
      { nome: 'Bruno Lima', email: 'bruno@escola.dev' },
      { nome: 'Carla Dias', email: 'carla@escola.dev' },
    ])
    .onConflictDoNothing();

  await db
    .insert(cursos)
    .values([
      { titulo: 'Programação Web', cargaHoraria: 80 },
      { titulo: 'Banco de Dados', cargaHoraria: 60 },
      { titulo: 'Estrutura de Dados', cargaHoraria: 60, ativo: false },
    ])
    .onConflictDoNothing();

  const [ana, bruno] = await db.select().from(usuarios).orderBy(usuarios.id);
  const [web, bd, estrutura] = await db.select().from(cursos).orderBy(cursos.id);

  if (bd && estrutura) {
    await db.update(cursos).set({ prerequisitoId: estrutura.id }).where(eq(cursos.id, bd.id));
  }
  if (web && bd) {
    await db.update(cursos).set({ prerequisitoId: bd.id }).where(eq(cursos.id, web.id));
  }

  if (ana && bruno && web && bd) {
    await db
      .insert(matriculas)
      .values([
        { usuarioId: ana.id, cursoId: web.id, status: 'ativa' },
        { usuarioId: ana.id, cursoId: bd.id, status: 'concluida', nota: 9.2 },
        { usuarioId: bruno.id, cursoId: web.id, status: 'trancada' },
      ])
      .onConflictDoNothing();
  }

  console.log(
    `seed: ${await db.$count(usuarios)} usuarios, ${await db.$count(cursos)} cursos, ${await db.$count(matriculas)} matriculas`,
  );
  sqlite.close();
}

main().catch((erro) => {
  console.error(erro);
  process.exit(1);
});
