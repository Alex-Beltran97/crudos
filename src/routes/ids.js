const express = require("express")
const router = express.Router()
const {
  findLot,
  findPpicking,
  findRoll,
  createRoll,
  createLot,
  createPpicking,
} = require("../controllers/ids.controllers")

router.get("/roll", async (req, res) => {
  let data = await findRoll()
  res.json(data)
})

router.get("/ppicking", async (req, res) => {
  let data = await findPpicking()
  res.json(data)
})

router.get("/lot", async (req, res) => {
  let data = await findLot()
  res.json(data)
})

router.post("/roll", async (req, res) => {
  let ids = req.body
  let data = await createRoll(ids)
  res.json(data)
})

router.post("/ppicking", async (req, res) => {
  let ids = req.body
  let data = await createPpicking(ids)
  res.json(data)
})

router.post("/lot", async (req, res) => {
  let ids = req.body
  let data = await createLot(ids)
  res.json(data)
})

module.exports = router
