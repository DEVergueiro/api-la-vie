const Pacientes = require("./pacientes")
const Psicologos = require("./psicologos")
const Atendimentos = require("./atendimentos")

Pacientes.belongsToMany(Psicologos,{
    foreignKey:"pacientes_id",
    through: Atendimentos,
})

Psicologos.belongsToMany(Pacientes,{
    foreignKey:"psicologos_id",
    through: Atendimentos,
})



module.exports={Pacientes, Psicologos, Atendimentos}