const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Aluno = require('./Aluno');
const Curso = require('./Curso');

//Modelo de Matrícula: Atua como a tabela intermediária que vincula Aluno e Curso.
const Matricula = sequelize.define('Matricula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,    // Define explicitamente como chave primária
        autoIncrement: true  // Incrementa o valor automaticamente a cada novo registro
    },
    // Nota: aluno_id e curso_id serão injetados aqui pelas definições de belongsTo abaixo
}, {
    tableName: 'matriculas',
    timestamps: false
});
// Definição de Relacionamentos (Foreign Keys)
// Configura que cada matrícula possui uma chave estrangeira apontando para um Aluno
Matricula.belongsTo(Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
// Configura que cada matrícula possui uma chave estrangeira apontando para um Curso
Matricula.belongsTo(Curso, { foreignKey: 'curso_id', as: 'curso' });

module.exports = Matricula;