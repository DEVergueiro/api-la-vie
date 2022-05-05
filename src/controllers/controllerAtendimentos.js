const {Atendimentos, Psicologos, Pacientes} = require("../models");


const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll({
        include:[
          {model:Psicologos,attributes:["nome"]},
          {model:Pacientes,attributes:["nome"]},
        ]
      });

      if(!listaDeAtendimentos){
        return res.status(200).json("[]")
      }

      res.status(200).json(listaDeAtendimentos);
    } catch (error) {
      res.status(500).json("Ocorreu um erro");
    }
  },

  async listarAtendimentosPorId(req, res) {
    try {
      const { id } = req.params;
      const listaDeAtendimentos = await Atendimentos.findOne({
        where: {
          id,
        },
        include:[
          {model:Psicologos,attributes:["nome"]},
          {model:Pacientes,attributes:["nome"]},
        ]
      });
      if (listaDeAtendimentos) {
        res.status(200).json(listaDeAtendimentos);
      } else {
        return res.status(404).json("Id não encontrado");
      }
      
    } catch (error) {
      res.status(500).json("Ocorreu um erro");
    }
  },

  async agendarAtendimento(req, res) {

    const { paciente_id, data_atendimento, observacao} =
      req.body;

    try{
      if (!paciente_id || !data_atendimento || !observacao ) {
        return res
          .status(400)
          .json(
            "Há um erro na requisição. Verifique se todos os dados foram preenchidos corretamente"
          );
      }

      const paciente = await Pacientes.findByPk(paciente_id)

      if(!paciente){
          return res.status(404).json("Id do paciente não encontrado");
      }

      const tokenId = req.auth.id
      
      const novoAtendimento = await Atendimentos.create({
        paciente_id,
        data_atendimento,
        observacao,
        psicologo_id: tokenId ,
      });
  
      res.status(201).json(novoAtendimento);
    }catch (error) {
        return res.status(500).json("Ocorreu um erro");
      }
  },


};

module.exports = atendimentosController;

