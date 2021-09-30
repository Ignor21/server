const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const worldTreeFunctions = require("./app/functions/worldTree.functions");

const app = express();
const port = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  
}).catch(function (error) {
  console.log(error);
});

var corsOptions = {
  origin: "*"
  // origin: "http://localhost:8081" - to enable CORS
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/pvu.routes")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  setInterval(() => worldTreeFunctions.getWorldTreeFromRemote(), 5000);
});