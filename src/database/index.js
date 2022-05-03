const Sequelize = require("sequelize");

let db = {}

const DATABASE_NAME = "la_vie";
const USERNAME      = "root";
const PASSWORD      = "root";
const DIALECT       = "mysql";
const HOSTNAME      = "localhost";
const PORT          = 3306;

const DB_SETUP = {
    dialect: DIALECT,
    host: HOSTNAME,
    port: PORT,
    define : {
       timestamps: false 
    }
}

try{
    db = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, DB_SETUP);
    console.log("Conexao ao banco de dados estabelecida");
}
catch(error){
    console.log("-------> DEU RUIM PARA CONECTAR NO BANCO");
    console.error(error);
}

async function checkConnection(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado com sucesso!");
    }
    catch(error){
        console.log("---> NAO CONSIGO MANTER CONEXAO COM O BANCO...");
        console.error(error);
    checkConnection
}); 

module.exports = db;