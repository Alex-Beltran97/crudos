const { crudos } = require("../models/nosql")
const { handleHttpError } = require("../utils/handleError")

const find = async (res) => {
  try {
    const data = await crudos.find({})
    return data
  } catch (e) {
    handleHttpError(res, "not found crudos")
  }
}

module.exports = { find }
