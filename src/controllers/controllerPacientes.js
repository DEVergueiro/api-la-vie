const {Pacientes} = require("../models");
const Sequelize = require("sequelize")

const pacientesController = {

    async cadastrar(req, res) {
        try {
           
            const { nome, email, data_nasc } = req.body;

            const existsUser = await Pacientes.count({where:{email}})

            if (existsUser){
                return res.status(400).json("E-mail já existe!")
            }

            const novoPaciente = await Pacientes.create({ nome, email, data_nasc });
           
            res.status(201).json(novoPaciente);
        }
        catch (error) {
            return res.status(400).json("Ocorreu um erro");
        }
    },
    async listarPacientes(req, res) {
        try {
            const lista = await Pacientes.findAll();
            
            if(!lista){
                return res.status(200).json("[]")
            }
            
            res.status(200);
            res.json(lista);
        }
        catch (error) {
            res.status(500);
            res.send("Ocorreu um erro");
        }
       
    },

    async buscarPeloId(req, res) {
        const idPacientes = req.params['id'];
        
        try {
            const paciente = await Pacientes.findByPk(idPacientes);
            if (!paciente){  
                return res.status(404).json("Id não encontrado");  
            }
            res.status(200).json(paciente);

            } catch (error) {
            res.status(500).json("Ocorreu um erro")
            }
    },

    async deletarPaciente(req, res){
        try {
            const { id } = req.params;

            const paciente = await Pacientes.destroy({
                where:{
                    id,
                }
            })
            if (paciente == 1) res.status(204).json("Psicólogo apagado")
            else res.status(404).json("Id não encontrado");
        
        } catch (error) {
            return res.status(500).json("Ocorreu um erro");
        }
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, data_nasc } = req.body;
        if (!nome || !email || !data_nasc ) {
            return res
              .status(400)
              .json(
                "Há um erro na requisição. Verifique se todos os dados foram preenchidos corretamente"
              );
          }
        try{

            const paciente = await Pacientes.findByPk(id)

            if(!paciente){
                return res.status(404).json("Id não encontrado");
            }

            const pacienteAtualizado = await Pacientes.update(
                {
                    nome,
                    email,
                    data_nasc,
                },
                {
                    where: {
                        id,
                    }
                }
            );
            

            Pacientes.findByPk(id).then((result) => res.json(result))
            res.status(201)
        } catch (error) {
            return res.status(500).json("Ocorreu um erro");
        }
    } 
}

module.exports = pacientesController;