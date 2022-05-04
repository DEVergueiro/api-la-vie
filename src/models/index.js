const Pacientes = require("./pacientes")
const Psicologos = require("./psicologos")
const Atendimentos = require("./atendimentos")

Pacientes.belongsToMany(Psicologos,{
    foreignKey:"paciente_id",
    through: Atendimentos,
})

Psicologos.belongsToMany(Pacientes,{
    foreignKey:"psicologo_id",
    through: Atendimentos,
})

module.exports={Pacientes, Psicologos}