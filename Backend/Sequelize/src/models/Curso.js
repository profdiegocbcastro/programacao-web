const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

// Define a estrutura da tabela 'cursos'. O Sequelize criará as colunas automaticamente com base nestas definições.
const Curso = sequelize.define('Curso', {
    // ID é criado automaticamente como Primary Key e Auto-Increment pelo Sequelize
    nome: {
        type: DataTypes.STRING,
        allowNull: false, // Não permite nulo
    },
    cargaHoraria: {
        type: DataTypes.INTEGER,
        allowNull: false // Não permite nulo
    }
}, {
    tableName: 'cursos', // Nome da tabela física no PostgreSQL
    timestamps: false
});

module.exports = Curso;