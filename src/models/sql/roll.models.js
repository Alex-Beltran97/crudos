const { Model, DataTypes, Sequelize } = require("sequelize")

const ROLL_TABLE = "ROLL"

const RollSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_roll: {
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

class Roll extends Model {
  static associate() {
    // associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLL_TABLE,
      modelName: "Roll",
      timestamps: false,
    }
  }
}

module.exports = { ROLL_TABLE, RollSchema, Roll }
