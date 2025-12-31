const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

// Define a estrutura da tabela 'alunos' no banco de dados. O Sequelize criará as colunas automaticamente com base nestas definições.
const Aluno = sequelize.define('Aluno', {
    // ID é criado automaticamente como Primary Key e Auto-Increment pelo Sequelize
    nome: {
        type: DataTypes.STRING,
        allowNull: false // Não permite nulo
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Garante que não existam dois alunos com o mesmo e-mail
    }
}, {
    tableName: 'alunos', // Nome da tabela física no PostgreSQL
    timestamps: false
});

module.exports = Aluno;