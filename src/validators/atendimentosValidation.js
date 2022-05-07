const { validate, Joi} = require("express-validation")



module.exports = validate({
    params: Joi.object({
        id: Joi.number().required()
    }),
    body: Joi.object({
        paciente_id: Joi.required(),
        data_atendimento: Joi.string().required(),
        observacao: Joi.string().required()
    })
})
