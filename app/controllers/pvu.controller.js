const db = require("../models");
const HomePage = db.homePage;
const News = db.news;
const Op = db.Sequelize.Op;

exports.getHomePageData = (req, res) => {
  let id = 0
  HomePage.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        err
      });
    });
};

exports.getNews = (req, res) => {
  News.findAll({order:[['id': 'DESC']]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        err
      });
    });
};