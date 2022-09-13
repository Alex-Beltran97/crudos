const { Sequelize } = require("sequelize")

const { config } = require("../../config/config")
const setupModels = require("../../models/sql")

const USER = encodeURIComponent(config.dbUserPg)
const PASSWORD = encodeURIComponent(config.dbPasswordPg)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHostPg}:${config.dbPortPg}/${config.dbNamePg}`

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
})

const dbconnectionSql = async () => {
  try {
    await sequelize.authenticate()
    console.log("Postgres connection")
  } catch (e) {
    console.error(e.message, "Failed conection a db Sql")
  }
}

setupModels(sequelize)
sequelize.sync()

module.exports = { sequelize, dbconnectionSql }
