import DataTypes from "sequelize";
import db from '../database.js';

const Match = db.define('match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario1_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario2_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE,
    deletado_em: DataTypes.DATE
}, {
    tableName: 'matches',
    timestamps: false
});

export default Match;