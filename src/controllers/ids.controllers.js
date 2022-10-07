const { models } = require("../databases/sql/pgconfig")

const findRoll = async () => {
  let results = await models.Roll.findAll()
  return results
}
const findLot = async () => {
  let results = await models.Lot.findAll()
  return results
}
const findPpicking = async () => {
  let results = await models.Ppicking.findAll()
  return results
}

const createRoll = async (id) => {
  let results = await models.Roll.create(id)
  return results
}

const createLot = async (id) => {
  let results = await models.Lot.create(id)
  return results
}

const createPpicking = async (id) => {
  let results = await models.Ppicking.create(id)
  return results
}

module.exports = {
  findRoll,
  findLot,
  findPpicking,
  createRoll,
  createLot,
  createPpicking,
}
