module.exports = app => {
  const homePage = require("../controllers/pvu.controller.js");

  var router = require("express").Router();

  router.get("/getHomePageData", homePage.getHomePageData);

  app.use('/api', router);
};