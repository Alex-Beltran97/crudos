const mongoose = require("mongoose")

const CrudosSchema = new mongoose.Schema(
  {
    idOperativo: {
      type: Number,
    },
    dateAndTime: {
      type: String,
    },
    idLot: {
      type: String,
    },
    idRoll: {
      type: String,
      unique: true,
    },
    rollweight: {
      type: String,
    },
    client: {
      type: String,
    },
    referent: {
      type: String,
    },
    Weaving: {
      type: String,
    },
    referralNumber: {
      type: String,
    },
    warehouseLocation: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
)

module.exports = mongoose.model("Crudos", CrudosSchema)
