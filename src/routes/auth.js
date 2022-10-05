const express = require("express")
const router = express.Router()
const { matchedData } = require("express-validator")
const { validatorLogin } = require("../utils/auth")
const { createUserSchema } = require("../schemas/auth")
const { loginCtrl } = require("../controllers/auth.controller")
const validatorHandler = require("../middlewares/validator.handler")

router.post(
  "/login",
  validatorHandler(createUserSchema, "body"),
  validatorLogin,
  async (req, res) => {
    req = matchedData(req)
    let data = await loginCtrl(req, res)
    res.send(data)
  }
)

module.exports = router
