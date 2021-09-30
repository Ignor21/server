const db = require("../models");
const WorldTree = db.worldTree;
const https = require('https');

exports.getWorldTreeFromRemote = () => {
  console.log('start func')
  let options = {
    host: 'backend-farm.plantvsundead.com',
    path: '/world-tree/datas',
    method: 'GET',
    headers: {
      'authorization': 'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgzMTU4ZTA0ZTE4MjRiZWZjYjhjNGQ4NWY4Mjk0MmM2OTJmYjNmYWMyIiwibG9naW5UaW1lIjoxNjMyODYyNTc0MTI0LCJjcmVhdGVEYXRlIjoiMjAyMS0wNy0xOSAwNzoyMzozNCIsImlhdCI6MTYzMjg2MjU3NH0.W7r6UqBo_NZaCqnP7L9xlIR22xjCH_2qtD1uZiAfR1c',
    }
  };
  https.get(options, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      let dat = JSON.parse(data).data
      const body = {
        level: dat.level,
        totalWater: dat.totalWater,
        reward: dat.reward
      };
      WorldTree.update(body, {
        where: { id: 1 }
      })
    });
  });

  /*var url = "https://backend-farm.plantvsundead.com/world-tree/datas";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("authorization", "Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgzMTU4ZTA0ZTE4MjRiZWZjYjhjNGQ4NWY4Mjk0MmM2OTJmYjNmYWMyIiwibG9naW5UaW1lIjoxNjMyODYyNTc0MTI0LCJjcmVhdGVEYXRlIjoiMjAyMS0wNy0xOSAwNzoyMzozNCIsImlhdCI6MTYzMjg2MjU3NH0.W7r6UqBo_NZaCqnP7L9xlIR22xjCH_2qtD1uZiAfR1c");
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText).data)
        const body = {
          level: 2,
          totalWater: 21,
          reward: 'sd'
        };
        WorldTree.create(body)
          .then(data => {
            console.log(data)
            res.send(data);
          })
          .catch(err => {
            console.log(err)
            res.status(500).send({
              err
            });
          });
        }
      }
  }.bind(this);
  xhr.send();*/
};