import DataTypes from "sequelize";
import db from '../database.js';

const UsuarioInteresse = db.define('usuario_interesse', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    interesse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
}, {
    tableName: 'usuarios_interesses',
    timestamps: false
});

export default UsuarioInteresse;