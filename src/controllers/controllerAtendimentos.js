const Atendimentos = require("../models/Atendimentos");

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll();
      res.status(200).json(listaDeAtendimentos);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async listarAtendimentosPorId(req, res) {
    try {
      const { id } = req.params;
      const listaDeAtendimentos = await Atendimentos.findOne({
        where: {
          id,
        },
      });
      if (listaDeAtendimentos) {
        res.status(200).json(listaDeAtendimentos);
      } else {
        res.status(404).json("Atendimento não encontrado");
      }
      console.log(res);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async agendarAtendimento(req, res) {
    const { paciente_id, data_atendimento, observacao, psicologo_id } =
      req.body;

    if (!paciente_id || !data_atendimento || !observacao || !psicologo_id) {
      return res
        .status(400)
        .json(
          "Há um erro na requisição. Verifique se todos os dados foram preenchidos corretamente"
        );
    }

    const novoAtendimento = await Atendimentos.create({
      paciente_id,
      data_atendimento,
      observacao,
      psicologo_id,
    });

    res.status(201).json(novoAtendimento);
  },
};

module.exports = atendimentosController;