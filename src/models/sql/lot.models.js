const { Model, DataTypes, Sequelize } = require("sequelize")

const LOT_TABLE = "LOT"

const LotSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_lot: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
}

class Lot extends Model {
  static associate() {
    // associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LOT_TABLE,
      modelName: "Lot",
      timestamps: false,
    }
  }
}

module.exports = { LOT_TABLE, LotSchema, Lot }
