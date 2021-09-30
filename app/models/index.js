const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  define: {
    timestamps: false,
    freezeTableName: true,
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.homePage = require("./homePage.model.js")(sequelize, Sequelize);
db.news = require("./news.model.js")(sequelize, Sequelize);
db.worldTree = require("./worldTree.model.js")(sequelize, Sequelize);
db.weatherHistory = require("./weatherHistory.model.js")(sequelize, Sequelize);

module.exports = db;