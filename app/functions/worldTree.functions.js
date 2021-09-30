const db = require("../models");
const WorldTree = db.worldTree;

export getWorldTreeFromRemote = () => {
  var url = "https://backend-farm.plantvsundead.com/world-tree/datas";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("authorization", "Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgzMTU4ZTA0ZTE4MjRiZWZjYjhjNGQ4NWY4Mjk0MmM2OTJmYjNmYWMyIiwibG9naW5UaW1lIjoxNjMyODYyNTc0MTI0LCJjcmVhdGVEYXRlIjoiMjAyMS0wNy0xOSAwNzoyMzozNCIsImlhdCI6MTYzMjg2MjU3NH0.W7r6UqBo_NZaCqnP7L9xlIR22xjCH_2qtD1uZiAfR1c");
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const body = {
            level: 2,
            totalWater: 21,
            reward: 'sd'
          };
          WorldTree.create(body)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                err
              });
            });
          }
        }
    }.bind(this);
    xhr.send();
};