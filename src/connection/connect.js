const Sequelize = require("sequelize");

const sequelize = new Sequelize("apinode", "root", "", {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}