const express = require("express")
const router = express.Router()
const { find, create } = require("../controllers/crudos.controller")
const google = require("../spreadsheet/crudos")

router.get("/", async (req, res) => {
  let data = await find(res)
  res.send(data)
})

router.get("/create", async (req, res) => {
  let crudos = []
  let sheet = await google.accederGoogleSheet()
  sheet.forEach((e) => {
    let body = {
      cedula: sheet[0].Cédula,
      dateAndTime: e.Fecha_y_hora_de_ingreso,
      idLot: e.Id_totalizado_del_lote,
      idRoll: e.Id_único_de_cada_rollo,
      rollweight: e.Peso_de_cada_rollo,
      client: e.Cliente,
      referent: e.Referencia,
      Weaving: e.Tejeduría,
      referralNumber: e.Número_de_remisión,
      warehouseLocation: e.Ubicación_Bodega,
    }
    crudos.push(body)
  })
  data = await create(crudos, res)
  res.json(data)
})

module.exports = router
