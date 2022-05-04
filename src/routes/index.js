const express = require("express");
const pacientesController = require("../controllers/controllerPacientes");
const psicologosController = require("../controllers/controllerPsicologos");
const atendimentosController = require("../controllers/controllerAtendimentos");
const pacientesValidation = require("../validators/pacientesValidation")
const psicologosValidation = require("../validators/psicologosValidation")
const atendimentosValidation = require("../validators/atendimentosValidation")
const authLoginValidation = require("../validators/auth/login")
const AuthController = require("../controllers/authControllers")

const routes = express.Router();


routes.post("/pacientes", pacientesValidation, pacientesController.cadastrar);
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPeloId);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesValidation, pacientesController.atualizarPaciente);

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologosId);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.post("/psicologos", psicologosValidation, psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosValidation, psicologosController.atualizarPsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentosPorId);
routes.post("/atendimentos", atendimentosValidation, atendimentosController.agendarAtendimento);

routes.post("/login", authLoginValidation, AuthController.login )
module.exports = routes;