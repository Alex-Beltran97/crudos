const express = require("express")
const cors = require("cors")
const app = express()
const { config } = require("./config/config")
const port = config.port || 3000
const { dbconnectionSql } = require("./databases/sql/pgconfig")

require("./databases/nosql/mongo")
app.use(cors())
app.use(express.json())

app.use("/api/v1", require("./routes"))

app.listen(port, () =>
  console.log(`your app is ready by http://localhost:${port}`)
)

dbconnectionSql()