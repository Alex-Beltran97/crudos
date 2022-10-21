const { Users, UserSchema } = require("./user.models")
const { Lot, LotSchema } = require("./lot.models")
const { Ppicking, PpickingSchema } = require("./ppicking.models")
const { Roll, RollSchema } = require("./roll.models")

function setupModels(sequelize) {
  Users.init(UserSchema, Users.config(sequelize))
  Lot.init(LotSchema, Lot.config(sequelize))
  Ppicking.init(PpickingSchema, Ppicking.config(sequelize))
  Roll.init(RollSchema, Roll.config(sequelize))
}

module.exports = setupModels
