const express = require("express");
const cors = require("cors");
const db = require("./database")
const routes = require("./routes");
const api = express();
const trataErros = require("./middlewares/trataErros")

db.checkConnection();

api.use(express.json());
api.use(cors());
api.use(routes);
api.use(trataErros)

api.listen(4000, () => {
    console.log("API rondando lindamente no na porta 4000");
    console.log("Acesse via http://localhost:4000");
});
