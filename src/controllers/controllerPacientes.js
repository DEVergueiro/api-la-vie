const Pacientes = require("../models/pacientes");


const pacientesController = {

    async cadastrar(req, res) {
        try {
           
            const { nome, email, data_nasc } = req.body;
            const novoPaciente = await Pacientes.create({ nome, email, data_nasc });
           
            return res.status(201).json(novoPaciente);
        }
        catch (error) {
            console.log("---> DEU RUIM AO CADASTRAR O PACIENTE");
            console.error(error);
            return res.status(500).json("deu ruim ao cadastrar o paciente");
        }
    }
}

module.exports = pacientesController;