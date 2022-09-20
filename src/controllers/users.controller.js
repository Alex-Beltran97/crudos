const { models } = require("../databases/sql/pgconfig")

let find = async () => {
  const results = await models.User.findAll()
  return results
}

let create = async (employees) => {
  try {
    await models.User.truncate()
    employees.forEach(async (e) => {
      try{
        await models.User.create(e)
      }catch(e){
        console.error(e.message, "Failed insertion users")
      }
    })
    return { message: "se crearon los usuarios correctamente" }
  } catch (e) {
    console.error(e.message, "failed insert users")
  }
}

module.exports = { find, create }
