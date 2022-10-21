const { Model, DataTypes, Sequelize } = require("sequelize")

const PPICKING_TABLE = "PPICKING"

const PpickingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_ppicking: {
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

class Ppicking extends Model {
  static associate() {
    // associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PPICKING_TABLE,
      modelName: "Ppicking",
      timestamps: false,
    }
  }
}

module.exports = { PPICKING_TABLE, PpickingSchema, Ppicking }
