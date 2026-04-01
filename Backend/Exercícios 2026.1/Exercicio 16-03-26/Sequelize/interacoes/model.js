import DataTypes from "sequelize";
import db from '../database.js';

const Interacao = db.define('interacao', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_origem: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_destino: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: DataTypes.STRING(10),
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE,
    deletado_em: DataTypes.DATE
}, {
    tableName: 'interacoes',
    timestamps: false
});

export default Interacao;