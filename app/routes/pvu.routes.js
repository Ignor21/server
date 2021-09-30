module.exports = app => {
  const controller = require("../controllers/pvu.controller.js");

  var router = require("express").Router();

  router.get("/getHomePageData", controller.getHomePageData);
  router.get("/getNews", controller.getNews);
  router.get("/getWorldTreeData", controller.getWorldTreeData);
  router.get("/getWeatherHistory", controller.getWeatherHistory);

  app.use('/api', router);
};