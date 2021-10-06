const db = require("../models");
const HomePage = db.homePage;
const News = db.news;
const WorldTree = db.worldTree;
const WeatherHistory = db.weatherHistory;
const Marketplace = db.marketplace;
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
  News.findAll({order:[['id', 'DESC']]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        err
      });
    });
};

exports.getWorldTreeData = (req, res) => {
  let id = 1
  WorldTree.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        err
      });
    });
};

exports.getWeatherHistory = (req, res) => {
  WeatherHistory.findAll({order:[['id', 'DESC']], limit: 14})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        err
      });
    });
};

exports.getMarketplace = (req, res) => {
  Marketplace.findAll({order:[['endingPrice', 'ASC']], limit: req.query.limit ? Number(req.query.limit) : 100000})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        err
      });
    });
};