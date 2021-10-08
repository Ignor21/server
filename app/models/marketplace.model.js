module.exports = (sequelize, Sequelize) => {
  const Marketplace = sequelize.define("marketplace", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    type: {
      type: Sequelize.STRING
    },
    le: {
      type: Sequelize.STRING
    },
    hours: {
      type: Sequelize.STRING
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