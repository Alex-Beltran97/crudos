require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1',require('./routes'))

app.listen(port, () =>
  console.log(`your app is ready by http://localhost:${port}`)
)
