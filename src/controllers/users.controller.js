const { models } = require("../databases/sql/pgconfig")

let find = async () => {
  const results = await models.User.findAll();
  return results
}

let create = async (body) => {
  const result = await models.User.create(body)
  return result
}

module.exports = { find, create }
