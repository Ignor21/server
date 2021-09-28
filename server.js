const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();
const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}).catch(function (error) {
  console.log(error);
});

var corsOptions = {
  origin: "http://localhost:8081"
};
app.options('*', cors()) // include before other routes 
app.use(cors(corsOptions))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/pvu.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));