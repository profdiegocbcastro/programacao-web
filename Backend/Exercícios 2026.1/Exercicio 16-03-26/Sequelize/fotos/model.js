import DataTypes from "sequelize";
import db from '../database.js';

const Foto = db.define('foto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    url_foto: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    principal: DataTypes.BOOLEAN,
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE,
    deletado_em: DataTypes.DATE
}, {
    tableName: 'fotos_usuario',
    timestamps: false
});

export default Foto;