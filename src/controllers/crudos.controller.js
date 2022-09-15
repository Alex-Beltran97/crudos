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
  try {
    user = await models.User.findAll({ where: { cedula: data.cedula } })
    let body = {
      idUser: user[0].id,
      dateAndTime: data.dateAndTime,
      idLot: data.idLot,
      idRoll: data.idRoll,
      rollweight: data.rollweight,
      client: data.client,
      referent: data.referent,
      Weaving: data.Weaving,
      referralNumber: data.referralNumber,
      warehouseLocation: data.warehouseLocation,
    }
    createCrudos = await crudos.create(body)
  } catch (e) {
    console.error(e.message, "error en la creacion")
    handleHttpError(res, "Failed creted crudos")
  }
  return createCrudos
}

module.exports = { find, create }
