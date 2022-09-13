const { Model, DataTypes, Sequelize } = require("sequelize")

const USER_TABLE = "users"

const UserSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idOperativo:{
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  cedula:{
    allowNull: false,
    type:DataTypes.DOUBLE,
    unique: true
  },
  name:{
    allowNull: false,
    type:DataTypes.STRING
  },
  lastname:{
    allowNull: false,
    type:DataTypes.STRING
  },
  cargo:{
    allowNull: false,
    type:DataTypes.STRING
  },
  phone:{
    allowNull: false,
    type:DataTypes.DOUBLE,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class User extends Model{
  static associate() {
    // associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User}
