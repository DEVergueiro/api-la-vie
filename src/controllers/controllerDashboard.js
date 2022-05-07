
const { Pacientes, Atendimentos, Psicologos } = require("../models")
const pacientesController = require("./controllerPacientes");
const controllerPsicologos = require("./controllerPsicologos");

const controllerDashboard = {
    async numeroPacientes(req, res){
        try{

            const numeroPacientes = await Pacientes.count()

            return res.status(200).json(`Temos ${numeroPacientes} paciente(s) cadastrado(s)`);

        }catch (error){
            return res.status(500).json("Ocorreu um erro");
        }

    },

    async numeroAtendimentos(req,res){
        try{

            const numeroAtendimentos = await Atendimentos.count()

            return res.status(200).json(`Temos ${numeroAtendimentos} atendimento(s) cadastrado(s)`);

        }catch (error){
            return res.status(500).json("Ocorreu um erro");

        }

    },

    async numeroPsicologos (req, res){
        try{
            const numeroPsicologos = await Psicologos.count()

            return res.status(200).json(`Temos ${numeroPsicologos} psicologo(s) cadastrado(s)`);

        }catch(error){
            return res.status(500).json("Ocorreu um erro");

        }

    },

    async mediaAtendimentos(req, res) {
        try {
            
            const numeroPsicologos = await Psicologos.count()
            const numeroAtendimentos = await Atendimentos.count()

            const mediaAtendimentosPorPsicologos = (Math.round(numeroAtendimentos / numeroPsicologos));

            return res.status(200).json(`Temos em média ${mediaAtendimentosPorPsicologos} atendimento(s) por psicólogo`);

        } catch (error) {
          return res.status(500).json("Ocorreu um erro");
        }
    }
    
}

module.exports = controllerDashboard;