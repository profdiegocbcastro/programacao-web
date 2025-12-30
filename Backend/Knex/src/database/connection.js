const knex = require('knex');

// Faz a conexão com o banco de dados
const db = knex({
  client: 'pg', // Define o PostgreSQL como driver
  // Objeto de configuração da rede e autenticação
  connection: {
    host: '127.0.0.1', 
    port: 5433,  
    // Credenciais de acesso ao container Docker/Banco
    user: 'admin', 
    password: 'admin', 
    database: 'db_gestao_escolar' // Nome da database que sera utilizado
  }
});
module.exports = db;

// Inicializa as tabelas no Postgres
async function initDb() {
  if (!await db.schema.hasTable('alunos')) {
    await db.schema.createTable('alunos', t => {
      t.increments('id').primary();
      t.string('nome').notNullable();
      t.string('email').unique().notNullable();
    });
  }
  if (!await db.schema.hasTable('cursos')) {
    await db.schema.createTable('cursos', t => {
      t.increments('id').primary();
      t.string('nome').notNullable();
      t.integer('cargaHoraria').notNullable();
    });
  }
  if (!await db.schema.hasTable('matriculas')) {
    await db.schema.createTable('matriculas', t => {
      t.increments('id').primary();
      t.integer('aluno_id').references('id').inTable('alunos').onDelete('CASCADE');
      t.integer('curso_id').references('id').inTable('cursos').onDelete('CASCADE');
    });
  }
  console.log("Banco PostgreSQL pronto no Docker!");
}
initDb();
module.exports = db;