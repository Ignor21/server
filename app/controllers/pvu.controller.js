const db = require("../models");
const HomePage = db.homePage;
const Op = db.Sequelize.Op;

exports.getHomePageData = (req, res) => {
  let id = 0
  HomePage.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};