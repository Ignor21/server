module.exports = app => {
  const tutorials = require("../controllers/pvu.controller.js");

  var router = require("express").Router();

  router.get("/getHomePageData", tutorials.getHomePageData);

  app.use('/api', router);
};