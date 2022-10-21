const { crudos } = require("../models/nosql")
const { models } = require("../databases/sql/pgconfig")
const { handleHttpError } = require("../utils/handleError")

const find = async (res) => {
  let all = []
  try {
    const data = await crudos.find({ status: true })
    all = data.map(async (e) => {
      user = await models.User.findAll({
        where: { idOperativo: e.idOperativo },
      })
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
  let createCrudos = {}
  let result = ""
  data.forEach(async (e) => {
    try {
      user = await models.User.findAll({
        where: { idOperativo: e.idOperativo },
      })
      if (user.length == 0) {
        console.error("User Not Found")
      }
      if (
        user[0].idOperativo &&
        e.dateAndTime &&
        e.idLot &&
        e.rollweight &&
        e.client &&
        e.referent &&
        e.Weaving &&
        e.referralNumber &&
        e.warehouseLocation
      ) {
        body = {
          idOperativo: user[0].idOperativo,
          dateAndTime: e.dateAndTime,
          idLot: e.idLot.trim(),
          idRoll: e.idRoll.trim(),
          rollweight: e.rollweight,
          client: e.client.trim(),
          referent: e.referent,
          Weaving: e.Weaving.trim(),
          referralNumber: e.referralNumber.trim(),
          warehouseLocation: e.warehouseLocation,
        }
      } else {
        body = {
          message: "vienen datos ene blanco",
          idOperativo: user[0].idOperativo,
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
        console.log(body)
        return body
      }
      createCrudos = await crudos.create(body)
    } catch (e) {
      console.error(e.message, "error en la creacion")
    }
  })
  return createCrudos
}

const update = async (idRoll) => {
  let uuid = await crudos.find({ idRoll: idRoll.id_roll.trim() })
  if (uuid.length == 0) {
    console.error({ message: "Id roll not found", id: idRoll.id_roll.trim() })
    return { message: "Id roll not found", id: idRoll.id_roll.trim() }
  }
  uuid = uuid[0]._id
  let body = {
    status: false,
  }
  try {
    const data = await crudos.findByIdAndUpdate(uuid, body)
    return data
  } catch (e) {
    console.error(e.message, "failed updated")
    return { message: "failed updated" }
  }
}

module.exports = { find, create, update }
