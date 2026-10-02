import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

const sqlite = new Database(process.env.DB_FILE ?? 'data/app.db');
sqlite.pragma('foreign_keys = ON');

migrate(drizzle(sqlite), { migrationsFolder: './drizzle' });
sqlite.close();

console.log('migrations aplicadas');
