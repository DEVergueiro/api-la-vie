const db = require ("../database");
const { DataTypes } = require("sequelize");
const Psicologos = require("./psicologos");
const Pacientes = require("./pacientes");

const Atendimentos = db.define(
    "Atendimentos",
    {
     id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        
     },
     psicologo_id:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "psicologo_id",
        references: {
            model: Psicologos, // 'Movies' would also work
            key: 'id'
          }
    },
    paciente_id:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "paciente_id",
        references: {
            model: Pacientes, // 'Movies' would also work
            key: 'id'
        }
    },
     data_atendimento:{
         type: DataTypes.DATE,
         field: "data_atendimento"
     },
     observacao:{
        type: DataTypes.STRING,
        length: 1000,
        field: "observacao"
    },
   
    },{
        tableName: "atendimentos",
        paranoid: true,
    }
);

module.exports = Atendimentos;
