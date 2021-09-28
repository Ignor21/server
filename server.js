const express = require('express');
const bodyParser = require("body-parser");
const db = require("./app/models");

const app = express();
const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}).catch(function (error) {
  console.log(error);
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/pvu.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));