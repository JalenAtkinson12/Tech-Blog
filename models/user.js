const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

user.addHook("beforeCreate", async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return user;
});

module.exports = User;
