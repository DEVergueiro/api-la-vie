const { Psicologos } = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const AuthController = {

    async login(req, res) {
        const { email, senha } = req.body;

        const psicologo = await Psicologos.findOne({
            where: {
                email,
            },
        });

        if (!psicologo) {
            return res.status(400).json("E-mail não cadastrado");
        }

        if (!bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(401).json("Senha inválida!");
        }

        const token = jwt.sign({
            id: psicologo.id,
            email: psicologo.email,
            nome: psicologo.nome
        },
        secret.key
        );

        return res.json(token)
    },

}

module.exports = AuthController;