const db = require("../connection/connect");

const User = db.sequelize.define("users", {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
