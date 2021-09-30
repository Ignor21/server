module.exports = (sequelize, Sequelize) => {
  const WeatherHistory = sequelize.define("weatherHistory", {
    date: {
      type: Sequelize.STRING
    },
    season: {
      type: Sequelize.STRING
    },
    weather: {
      type: Sequelize.STRING
    },
    effect: {
      type: Sequelize.STRING
    }
  });

  return WeatherHistory;
};