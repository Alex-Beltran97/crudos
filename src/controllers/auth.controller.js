const { models } = require("../databases/sql/pgconfig")
const { compare } = require("../utils/handlePassword")

const loginCtrl = async (doc, res) => {
  let user = await models.User.findAll({ where: { cedula: doc.cedula } })
  if (user.length == 0) {
    return { message: "user not found" }
  }
  const hashPassword = user[0].password
  const check = await compare(doc.password, hashPassword)
  if (!check) {
    return { message: "password invalid" }
  }
  let data = user[0]
  let body = {
    id: data.id,
    idOperativo: data.idOperativo,
    cedula: data.cedula,
    name: data.name,
    lastname: data.lastname,
    cargo: data.cargo,
    phone: data.phone,
  }
  return body
}

module.exports = { loginCtrl }
