module.exports = (sequelize, Sequelize) => {
  const Marketplace = sequelize.define("marketplace", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    config: {
      type: Sequelize.JSON
    },
    endingPrice: {
      type: Sequelize.STRING
    },
    timeSell: {
      type: Sequelize.STRING
    }
  });

  return Marketplace;
};