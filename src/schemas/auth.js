const Joi = require("joi")

const document = Joi.number().integer()

const createUserSchema = Joi.object({
  cedula: document.required(),
})

module.exports = { createUserSchema }
