require("dotenv").config()

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGO_INITDB_ROOT_USERNAME,
  dbPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
  dbHost: process.env.MONGO_HOST,
  dbName: process.env.MONGO_DB,
  dbPort: process.env.MONGO_PORT,
  dbconnection: process.env.MONGO_CONNECTION,
  dbHostPg: process.env.PG_HOST,
  dbNamePg: process.env.POSTGRES_DB,
  dbPortPg: process.env.PG_PORT,
  dbPasswordPg: process.env.POSTGRES_PASSWORD,
  dbUserPg: process.env.POSTGRES_USER,
}

module.exports = { config }
