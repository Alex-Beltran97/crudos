const { crudos } = require("../models/nosql")
const { models } = require("../databases/sql/pgconfig")
const { handleHttpError } = require("../utils/handleError")

const find = async (res) => {
  let all = []
  try {
    const data = await crudos.find({})
    all = data.map(async (e) => {
      user = await models.User.findAll({ where: { id: e.idUser } })
      return {
        crudos: e,
        user: user[0],
      }
    })
    let allData = await Promise.all(all).catch(console.error)
    return allData
  } catch (e) {
    handleHttpError(res, "not found crudos")
  }
}

const create = async (data, res) => {
  let result = ""
  data.forEach(async (e) => {
    try {
      user = await models.User.findAll({ where: { cedula: e.cedula } })
      if (!user) {
        handleHttpError(res, "user not found")
      }
      let body = {
        idUser: user[0].id,
        dateAndTime: e.dateAndTime,
        idLot: e.idLot,
        idRoll: e.idRoll,
        rollweight: e.rollweight,
        client: e.client,
        referent: e.referent,
        Weaving: e.Weaving,
        referralNumber: e.referralNumber,
        warehouseLocation: e.warehouseLocation,
      }
      createCrudos = await crudos.create(body)
      result = { message: "success created" }
    } catch (e) {
      result = { message: "error en la creacion", error: e.message }
      console.error(e.message, "error en la creacion")
    }
    return result
  })
}

module.exports = { find, create }
