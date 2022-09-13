const express = require("express")
const router = express.Router()
const { create, find } = require("../controllers/users.controller")

router.get("/", async (req, res) => {
  let users = await find()
  res.send(users) 
})

router.post("/", async (req, res) => {
  let { body } = req
  let users = await create(body)
  res.send(users)
})

module.exports = router
