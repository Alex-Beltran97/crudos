const { Users, UserSchema } = require("./user.models")

function setupModels(sequelize) {
  Users.init(UserSchema, Users.config(sequelize))
}

module.exports = setupModels;