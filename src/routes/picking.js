const express = require("express")
const router = express.Router()
const google = require("../spreadsheet/ppicking")
const { create, find } = require("../controllers/picking.controller")

router.get("/ppicking", async (req, res) => {
  let data = await find()
  res.json(data)
})

router.get("/ppicking/create", async (req, res) => {
  let picking = []
  let sheet = await google.accederGoogleSheet()
  sheet.forEach((e) => {
    let body = {
      idOperativo: sheet[0].Id_Operario,
      idPicking: e.ID_Picking,
      docDespa: e.cedula_despacahdor,
      dateAndTime: e.Fecha_hora_ingreso,
      idLot: e.Id_lote,
      idRoll: e.Id_rollo,
      rollweight: e.Peso,
      client: e.Cliente,
      referent: e.Referencia,
      Weaving: e.Tejeduría,
      referralNumber: e.Número_de_remisión,
      warehouseLocation: e.Ubicaión,
    }
    picking.push(body)
  })
  data = await create(picking)
  res.json(data)
})

module.exports = router
