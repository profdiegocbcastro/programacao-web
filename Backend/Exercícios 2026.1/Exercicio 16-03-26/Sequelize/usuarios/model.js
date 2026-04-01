import DataTypes from "sequelize";
import db from '../database.js';

const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    genero: DataTypes.STRING(20),
    bio: DataTypes.STRING(300),
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE,
    deletado_em: DataTypes.DATE
}, {
    tableName: 'usuarios',
    timestamps: false
});

export default Usuario;