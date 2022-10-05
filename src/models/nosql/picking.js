const mongoose = require("mongoose")

const PickingSchema = new mongoose.Schema(
  {
    idOperativo: {
      type: Number,
    },
    idPicking: {
      type: String,
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

module.exports = mongoose.model("picking", PickingSchema)
