const express = require("express");
const pacientesController = require("../controllers/controllerPacientes")
const pacientesValidation = require("../validators/pacientesValidation")

const routes = express.Router();


routes.post("/pacientes", pacientesValidation, pacientesController.cadastrar);
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPeloId);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesValidation, pacientesController.atualizarPaciente);

module.exports = routes;
