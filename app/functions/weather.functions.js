const db = require("../models");
const WeatherHistory = db.weatherHistory;
const https = require('https');

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

exports.getWeatherFromRemote = () => {
  let weatherBD = {}
  WeatherHistory.findAll({
    limit: 1,
    order:[['id', 'DESC']]
  })
    .then(data => {
      weatherBD = data[0]
    })
    .catch(err => {
      console.log(err)
    });
  let options = {
    host: 'backend-farm.plantvsundead.com',
    path: '/weather-today',
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
      let date = toTitleCase(dat.name)

      console.log(dat)

      const body = {
        date: '',
        season: '',
        weather: '',
        effect: ''
      };
      
      if(date !== weatherBD.weather) {
        console.log('create')
        //WeatherHistory.create(body)
      } else {
        console.log('no create')
      }
    });
  });
};