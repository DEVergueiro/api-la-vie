const Pacientes = require("./pacientes")
const Psicologos = require("./psicologos")
const Atendimentos = require("./atendimentos")

Atendimentos.belongsTo(Pacientes,{
    foreignKey:"paciente_id",
})

Atendimentos.belongsTo(Psicologos,{
    foreignKey:"psicologo_id",
})

module.exports={Pacientes, Psicologos, Atendimentos}