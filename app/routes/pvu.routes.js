module.exports = app => {
  const homePage = require("../controllers/pvu.controller.js");
  const news = require("../controllers/pvu.controller.js");

  var router = require("express").Router();

  router.get("/getHomePageData", homePage.getHomePageData);
  router.get("/getNews", news.getNews);

  app.use('/api', router);
};