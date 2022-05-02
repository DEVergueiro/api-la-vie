const express = require("express");
const pacientesController = require("../controllers/controllerPacientes")

const routes = express.Router();


routes.post("/pacientes", pacientesController.cadastrar);

module.exports = routes;
