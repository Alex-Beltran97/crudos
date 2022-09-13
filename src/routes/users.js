const express = require("express")
const router = express.Router()
const { create, find } = require("../controllers/users.controller")

router.get("/", async (req, res) => {
  let users = await find()
  res.send(users) 
})

router.post("/", (req, res) => {
  let { body } = req
  res.json(body)
})

module.exports = router
