const express = require("express")
const router = express.Router()
const { find, create } = require("../controllers/crudos.controller")

router.get("/", async (req, res) => {
  let data = await find(res)
  res.send(data)
})

router.get("/create", async (req, res) => {
  let body = {
    idOperativo: 1001,
    cedula: 100000000,
    Fullname: "yeferson castiblanco",
    cargo: "developer",
    dateAndTime: "2022-09-14 02:29:36",
    idLot: "1001L",
    idRoll: "1002R",
    rollweight: 25.5,
    client: "peesco",
    referent: "123abc",
    Weaving: "tejeduria",
    referralNumber: 2233,
    warehouseLocation: "TL001",
  }
  let data = await create(body, res)
  res.json(data)
})

module.exports = router
