const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send({message:"welcome api rest user"})
})

module.exports = router
