const express = require("express")
const app = express()
const port = 5050


app.listen(port, () => {
  console.log(`your app is ready by http://localhost:${port}`)
})
