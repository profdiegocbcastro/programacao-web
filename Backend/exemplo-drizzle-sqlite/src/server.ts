import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import express from 'express';
import * as schema from './db/schema';
import { usuarioRoutes } from './usuarios/usuario.routes';
import { cursoRoutes } from './cursos/curso.routes';
import { matriculaRoutes } from './matriculas/matricula.routes';

const sqlite = new Database(process.env.DB_FILE ?? 'data/app.db');
sqlite.pragma('foreign_keys = ON');
sqlite.pragma('journal_mode = WAL');

export const db = drizzle(sqlite, {
  schema,
  logger: process.env.DB_LOG === '1',
});

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/cursos', cursoRoutes);
app.use('/matriculas', matriculaRoutes);

const porta = Number(process.env.PORT ?? 3000);
app.listen(porta, () => console.log(`http://localhost:${porta}`));
