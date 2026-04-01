import DataTypes from "sequelize";
import db from '../database.js';

const Endereco = db.define('endereco', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    logradouro: DataTypes.STRING(150),
    numero: DataTypes.STRING(10),
    complemento: DataTypes.STRING(50),
    bairro: DataTypes.STRING(100),
    cidade: DataTypes.STRING(100),
    estado: DataTypes.STRING(50),
    cep: DataTypes.STRING(15),
    latitude: DataTypes.DECIMAL(9, 6),
    longitude: DataTypes.DECIMAL(9, 6)
}, {
    tableName: 'enderecos',
    timestamps: false
});

export default Endereco;