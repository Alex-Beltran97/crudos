const express = require("express")
const router = express.Router()
const { find } = require("../controllers/crudos.controller")

router.get('/',async(req, res)=>{
  let data = await find(res)
  res.send(data)
})

module.exports = router