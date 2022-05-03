const express = require("express");
const pacientesController = require("../controllers/controllerPacientes")

const routes = express.Router();


routes.post("/pacientes", pacientesController.cadastrar);
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPeloId);
routes.delete("/pacientes/:id/deletar", pacientesController.deletarPaciente);
routes.put("/pacientes/:id/atualizar", pacientesController.atualizarPaciente);

module.exports = routes;
