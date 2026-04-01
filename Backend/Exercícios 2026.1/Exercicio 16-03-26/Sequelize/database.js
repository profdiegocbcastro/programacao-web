import Sequelize from 'sequelize';

const db = new Sequelize('INSIRA A DATABASE AQUI', 'INSIRA O USUARIO AQUI', 'INSIRA A SENHA AQUI', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;