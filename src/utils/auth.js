const { check } = require("express-validator")
const validateResults = require("./handleValidator")

const validatorLogin = [
  check("cedula").exists().notEmpty().isLength({ min: 8, max: 10 }),
  (req, res, next) => {
    return validateResults(req, res, next)
  },
]

module.exports = { validatorLogin }
