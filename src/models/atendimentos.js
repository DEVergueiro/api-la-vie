const db = require ("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
    "Atendimentos",
    {
     id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        
     },
     psicologos_id:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "psicologos_id"
    },
    pacientes_id:{
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: "pacientes_id"
    },
    data_atendimentos:{
        type: DataTypes.DATE,
        field: "data_atendimentos"
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

module.exports = Atendimentos