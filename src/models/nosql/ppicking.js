const mongoose = require("mongoose")

const PpickingSchema = new mongoose.Schema(
  {
    idOperativo: {
      type: Number,
    },
    idPicking: {
      type: String,
    },
    docDespa: {
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
  },
  {
    timestamps: true,
    versionkey: false,
  }
)

module.exports = mongoose.model("ppicking", PpickingSchema)
