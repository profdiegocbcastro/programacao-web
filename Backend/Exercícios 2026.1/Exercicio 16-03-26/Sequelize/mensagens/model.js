import DataTypes from "sequelize";
import db from '../database.js';

const Mensagem = db.define('mensagem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    match_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    remetente_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    conteudo: DataTypes.STRING,
    enviado_em: DataTypes.DATE
}, {
    tableName: 'mensagens',
    timestamps: false
});

export default Mensagem;