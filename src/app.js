const express = require("express")
const cors = require("cors")
const app = express()
const { config } = require("./config/config")
const morgan = require("morgan")
const port = config.port || 3000
// const { dbconnectionSql } = require("./databases/sql/pgconfig")

require("./databases/nosql/mongo")
app.use(morgan())
app.use(cors())
app.use(express.json())
// TODO : hola que hace
app.use("/api/v1", require("./routes"))

app.listen(port, () =>
  console.log(`your app is ready by http://localhost:${port}`)
)

// dbconnectionSql()