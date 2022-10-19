const express = require("express")
const router = express.Router()
const google = require("../spreadsheet/ppicking")
const googleP = require('../spreadsheet/picking')
const {
  create,
  find,
  listPincking,
  orderPicking,
  createPicking,
  findPicking,
} = require("../controllers/picking.controller")

router.get("/ppicking", async (req, res) => {
  let data = await find()
  res.json(data)
})

router.get("/ppicking/create", async (req, res) => {
  let picking = []
  let sheet = await google.accederGoogleSheet()
  sheet.forEach((e) => {
    let body = {
      idOperativo: sheet[0].ID_Operario,
      idPicking: e.ID_Picking,
      docDespa: e.cedula_despachador,
      dateAndTime: e.Fecha_hora_ingreso,
      idLot: e.Id_lote,
      idRoll: e.Id_rollo,
      rollweight: e.Peso,
      client: e.Cliente,
      referent: e.Referencia,
      Weaving: e.Tejeduría,
      referralNumber: e.Número_de_remisión,
      warehouseLocation: e.Ubicacion,
    }
    picking.push(body)
  })
  data = await create(picking)
  res.json(data)
})

router.get("/list", async (req, res) => {
  let result = await listPincking()
  if (result) {
    res.json(result)
  } else {
    res.json({ message: "error en list de ip ppicking" }).status(500)
  }
})

router.post("/order", async (req, res) => {
  let id = req.body.orderPicking
  if (!id) {
    res.send({ message: "Se debe enviar una idppicking" })
  }
  let result = await orderPicking(id)
  if (result) {
    res.json(result)
  } else {
    res.json({ message: "error en list de ip ppicking" }).status(500)
  }
})

router.get("/create", async (req, res) => {
  let picking = []
  let sheet = await googleP.accederGoogleSheet()
  sheet.forEach((e) => {
    let body = {
      idOperativo: sheet[0].ID_Operario,
      idPicking: e.Orden_de_Picking,
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
  data = await createPicking(picking)
  res.json(data)
})

router.get('/',async (req, res)=>{
  let data = await findPicking()
  res.json(data)
})
module.exports = router
