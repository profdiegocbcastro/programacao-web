import DataTypes from "sequelize";
import db from '../database.js';

const Interesse = db.define('interesse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'interesses',
    timestamps: false
});

export default Interesse;