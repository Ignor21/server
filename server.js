const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const mysql = require("mysql2");
const dbConfig = require("./app/config/db.config.js");
  
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD
});

const app = express();
const port = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}).catch(function (error) {
  console.log(error);
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'IT\'S WORKING!' });
});

require("./app/routes/turorial.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));