const { models } = require("../databases/sql/pgconfig")

const findRoll = async () => {
  let results = {}
  try {
    results = await models.Roll.findAll()
  } catch (e) {
    console.error(e.message, "Not found id roll")
  }
  return results
}
const findLot = async () => {
  let results = {}
  try {
    results = await models.Lot.findAll()
  } catch (e) {
    console.error(e.message, "Not found id roll")
  }
  return results
}
const findPpicking = async () => {
  let results = {}
  try {
    results = await models.Ppicking.findAll()
  } catch (e) {
    console.error(e.message, "Not found id roll")
  }
  return results
}

const createRoll = async (id) => {
  let results = {}
  try {
    results = await models.Roll.create(id)
  } catch (e) {
    console.error(e.message, "Not found id roll")
  }
  return results
}

const createLot = async (id) => {
  let results = {}
  try {
    results = await models.Lot.create(id)
  } catch (e) {
    console.error(e.message, "Not found id roll")
  }
  return results
}

const createPpicking = async (id) => {
  let results = {}
  try {
    results = await models.Ppicking.create(id)
  } catch (e) {
    console.error(e.message, "Not found id roll")
  }
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
