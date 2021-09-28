const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const mysqlAdmin = require('node-mysql-admin');

const app = express();
const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
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

app.use(mysqlAdmin(app));

require("./app/routes/pvu.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));