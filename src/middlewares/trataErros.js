// const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");


function trataErros(error, req, res, next) {

    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)
    }
    if (error.name === "UnauthorizedError") {
        return res.status(401).json(error)
    }

    return res.status(500).json(error)

}

module.exports = trataErros

