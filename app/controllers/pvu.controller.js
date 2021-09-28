const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.getHomePageData = (req, res) => {
  const data = { pvuToLe: 105, leToPvu: 550, nextLeToPvu: 605, date: '4.10' }
  res.send(data);
};