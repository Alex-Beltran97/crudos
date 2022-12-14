const { ppicking, picking } = require("../models/nosql")
const { models } = require("../databases/sql/pgconfig")
const { handleHttpError } = require("../utils/handleError")

const find = async () => {
  let all = []
  try {
    const data = await ppicking.find({})
    all = data.map(async (e) => {
      user = await models.User.findAll({
        where: { idOperativo: e.idOperativo },
      })
      return {
        ppicking: e,
        user: user[0],
      }
    })
    let allData = await Promise.all(all).catch(console.error)
    return allData
  } catch (e) {
    handleHttpError(res, "not found picking")
  }
}

const listPincking = async () => {
  let all = []
  try {
    const data = await ppicking.find({})
    data.forEach((e) => {
      all.push(e.idPicking)
    })
    let hash = {}
    all = all.filter((o) => (hash[o] ? false : (hash[o] = true)))
    return all
  } catch (e) {
    console.error(e.message, "error en la lista de ppicking")
  }
}

const orderPicking = async (id) => {
  let all = []
  try {
    const data = await ppicking.find({ idPicking: id })
    return data
  } catch (e) {
    console.error(e.message, "error en la lista de ppicking")
  }
}

const create = async (data) => {
  let result = ""
  data.forEach(async (e) => {
    try {
      user = await models.User.findAll({
        where: { idOperativo: e.idOperativo },
      })
      if (user.length == 0) {
        console.error("User Not Found")
      }
      let body = {
        idOperativo: user[0].idOperativo,
        idPicking: e.idPicking,
        docDespa: e.docDespa,
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
      createCrudos = await ppicking.create(body)
      result = { message: "success created" }
    } catch (e) {
      result = { message: "error en la creacion", error: e.message }
      console.error(e.message, "error en la creacion")
    }
    return result
  })
}

const update = async (idRoll) => {
  let uuid = await crudos.find({ idRoll: idRoll.id_roll })
  if (uuid.length == 0) {
    return false
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
let createPicking = async (data) => {
  let result = ""
  data.forEach(async (e) => {
    try {
      user = await models.User.findAll({
        where: { idOperativo: e.idOperativo },
      })
      if (user.length == 0) {
        console.error("User Not Found")
      }
      let body = {
        idOperativo: user[0].idOperativo,
        idPicking: e.idPicking,
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
      createCrudos = await picking.create(body)
      result = { message: "success created" }
    } catch (e) {
      result = { message: "error en la creacion", error: e.message }
      console.error(e.message, "error en la creacion")
    }
    return result
  })
}

let findPicking = async () => {
  let all = []
  try {
    const data = await picking.find({})
    all = data.map(async (e) => {
      user = await models.User.findAll({
        where: { idOperativo: e.idOperativo },
      })
      return {
        picking: e,
        user: user[0],
      }
    })
    let allData = await Promise.all(all).catch(console.error)
    return allData
  } catch (e) {
    handleHttpError(res, "not found picking")
  }
}

module.exports = {
  find,
  create,
  update,
  listPincking,
  orderPicking,
  findPicking,
  createPicking,
}
