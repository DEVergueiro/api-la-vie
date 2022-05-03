const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        nome: {
            type: DataTypes.STRING,
            // length: 100,
            field: "nome"

        },
        email: {
            type: DataTypes.STRING,
            // length: 100,
            field: "email"
        },
        data_nasc: {
            type: DataTypes.DATEONLY,
            field: "data_nasc"
        },
        
    },
    {
        tableName: "pacientes"
    });

module.exports = Pacientes;