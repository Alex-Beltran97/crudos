const { models } = require("../databases/sql/pgconfig")

const loginCtrl = async (doc) => {
  data = { message: "authentication not allowed" }
  let user = await models.User.findAll({ where: { cedula: doc.cedula } })
  let document = user.filter((e) => e.cedula == doc.cedula)
  if (document.length) {
    return document[0]
  } else {
    return {
      message: "authentication not allowed",
      status: 403,
    }
  }
}

module.exports = { loginCtrl }
