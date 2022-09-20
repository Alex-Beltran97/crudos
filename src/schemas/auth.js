const Joi = require("joi")

const document = Joi.number().integer()
const password = Joi.string().min(8).max(10)

const createUserSchema = Joi.object({
  cedula: document.required(),
  password: password.required(),
})

module.exports = { createUserSchema }
