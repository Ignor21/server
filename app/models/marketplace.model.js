module.exports = (sequelize, Sequelize) => {
  const Marketplace = sequelize.define("marketplace", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    config: {
      type: Sequelize.JSON
    },
    endingPrice: {
      type: Sequelize.INTEGER
    },
    timeSell: {
      type: Sequelize.INTEGER
    }
  });

  return Marketplace;
};