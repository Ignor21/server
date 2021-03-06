const db = require("../models");
const Marketplace = db.marketplace;
const https = require('https');

exports.getMarketplaceFromRemote = () => {
  let options = {
    host: 'backend-farm.plantvsundead.com',
    path: '/get-plants-filter-v2?offset=0&limit=1000000&type=1',
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
      let arrayfromRemote = []

      dat.forEach((element) => {
        let item = {
          id: element.id,
          type: element.config.stats.type,
          le: element.config.farm.le,
          hours: element.config.farm.hours,
          endingPrice: element.endingPrice,
          timeSell: element.timeSell
        };
        arrayfromRemote.push(item)
      })

      Marketplace.findAll({ raw: true }).then(function (arrayOnDb) {
        const toDelete = arrayOnDb.filter(item => !arrayfromRemote.find( el => el['id'] === Number(item.id) ));
        let idArrayToDelete = []
        toDelete.forEach(item => {
          idArrayToDelete.push(item.id)
        })
        Marketplace.destroy({ where: { id: idArrayToDelete }})

        Marketplace.bulkCreate(arrayfromRemote, {raw: true, updateOnDuplicate: ["type", "le", "hours", "endingPrice", "timeSell"]}).then(function(user) {}).catch(function(err) { console.log(err) });
      });
    });
  });
};