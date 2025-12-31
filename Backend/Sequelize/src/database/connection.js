const { Sequelize } = require('sequelize');

// Define os parâmetros de acesso ao banco de dados.
const sequelize = new Sequelize('db_gestao_escolar', 'admin', 'admin', {
  host: '127.0.0.1',
  port: 5433,
  dialect: 'postgres', // Define que estamos usando o banco PostgreSQL
  logging: false,
});

async function initDb() {
  try {
    // Verifica se as credenciais e o host estão corretos
    await sequelize.authenticate();
    // Sincroniza os modelos (tabelas) com o banco. 
    // O { alter: true } atualiza a estrutura da tabela se você mudar algo no código.
    await sequelize.sync({ alter: true }); 
    console.log("Sequelize: Conexão estabelecida e tabelas sincronizadas!");
  } catch (error) {
    console.error("Erro ao conectar ou sincronizar o banco:", error);
  }
}

initDb();

module.exports = sequelize;