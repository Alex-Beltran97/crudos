const { models } = require("../databases/sql/pgconfig")

let find = async () => {
  const results = await models.User.findAll();
  return results
}

let create = async () => {}

module.exports = { find, create }
