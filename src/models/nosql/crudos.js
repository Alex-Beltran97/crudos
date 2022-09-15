const mongoose = require("mongoose")

const CrudosSchema = new mongoose.Schema(
  {
    idUser: {
      type: Number,
    },
    dateAndTime: {
      type: Date,
    },
    idLot: {
      type: String,
    },
    idRoll: {
      type: String,
    },
    rollweight: {
      type: Number,
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
  },
  {
    timestamps: true,
    versionkey: false,
  }
)

module.exports = mongoose.model("Crudos", CrudosSchema)
