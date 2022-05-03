const {Pacientes} = require("../models");
const Sequelize = require("sequelize")

const pacientesController = {

    async cadastrar(req, res) {
        try {
           
            const { nome, email, data_nasc } = req.body;
            const novoPaciente = await Pacientes.create({ nome, email, data_nasc });
           
            return res.status(201).json(novoPaciente);
        }
        catch (error) {
            console.log("---> ERRO AO CADASTRAR O PACIENTE");
            console.error(error);
            return res.status(400).json("erro ao cadastrar o paciente");
        }
    },
    async listarPacientes(req, res) {
        try {
            const lista = await Pacientes.findAll();
            res.status(200);
            res.json(lista);
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar dados dos pacientes");
        }
       
    },

    async buscarPeloId(req, res) {
        const idPacientes = req.params['id'];
        console.log("id da url recuperado = " + req.params["id"])
        
        try {
            const paciente = await Pacientes.findByPk(idPacientes);
            if (paciente){  
                res.status(200);
                res.json(paciente);
            }
            else{
                res.status(404);
                res.send("Id não encontrado");
            }
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar dados do banco")
        }
    },

    async deletarPaciente(req, res){
        try {
            const { id } = req.params;

            if (await Pacientes.destroy({
                where:{
                    id,
                }})) {
                return res.status(204).json("Paciente Deletado")}
            else{
                res.status(404);
                res.send("Id não encontrado");
            }

        } catch (error) {
            return res.status(500).json("Ocorreu algum problema");
        }
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, data_nasc } = req.body;

        // if (!id) return res.status(400).json("id não enviado");
        if (!nome || !email || !data_nasc) return res.status(400).json("Erro, informe todos os dados");

        const pacienteAtualizado = await Pacientes.update(
            {
                nome,
                email,
                data_nasc,
            },
            {
                where: {
                    id,
                },
                plain: true,
                
            }
        );
        
        Pacientes.findByPk(id).then((result) => res.json(result))
        res.status(200)

    }
}

module.exports = pacientesController;