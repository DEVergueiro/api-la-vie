const {expressjwt} = require('express-jwt');
const pass = require("../config/secret")


module.exports = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
})