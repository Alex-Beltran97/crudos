const express = require("express")
const router = express.Router()
const { create, find } = require("../controllers/users.controller")
const google = require("../spreadsheet")

router.get("/", async (req, res) => {
  let users = await find()
  res.send(users)
})

router.get("/create", async (req, res) => {
  let employee = []
  let employees = await google.accederGoogleSheet()
  employees.forEach((e) => {
    let body = {
      idOperativo: e.IdOperario,
      cedula: e.Cédula,
      name: e.Nombre,
      lastname: e.Apellido,
      cargo: e.Cargo,
      phone: e.Telefono,
    }
    employee.push(body)
  })
  let users = await create(employee)
  res.send(users)
})

module.exports = router
