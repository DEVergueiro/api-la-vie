
const { Pacientes, Atendimentos, Psicologos } = require("../models")
const pacientesController = require("./controllerPacientes");
const controllerPsicologos = require("./controllerPsicologos");

const controllerDashboard = {
    async numeroPacientes(req, res){
        try{

            const nPacientes = await Pacientes.count()

            return res.status(200).json(`Temos ${nPacientes} paciente(s) cadastrado(s)`);

        }catch (error){
            return res.status(500).json("Ocorreu um erro");
        }

    },

    async numeroAtendimentos(req,res){
        try{

            const nAtendimentos = await Atendimentos.count()

            return res.status(200).json(`Temos ${nAtendimentos} atendimento(s) cadastrado(s)`);

        }catch (error){
            return res.status(500).json("Ocorreu um erro");

        }

    },

    async numeroPsicologos (req, res){
        try{
            const nPsicologos = await Psicologos.count()

            return res.status(200).json(`Temos ${nPsicologos} psicologo(s) cadastrado(s)`);

        }catch(error){
            return res.status(500).json("Ocorreu um erro");

        }

    },

    async mediaAtendimentos(req, res) {
        try {
            
            const nPsicologos = await Psicologos.count()
            const nAtendimentos = await Atendimentos.count()

            const mediaAtPorPsi = (Math.round(nAtendimentos / nPsicologos));

            return res.status(200).json(`Temos em média ${mediaAtPorPsi} atendimentos por psicólogos`);

        } catch (error) {
          return res.status(500).json("Ocorreu um erro");
        }
    }
    
}

module.exports = controllerDashboard;