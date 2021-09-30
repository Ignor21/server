module.exports = (sequelize, Sequelize) => {
  const WorldTree = sequelize.define("worldTree", {
    level: {
      type: Sequelize.INTEGER
    },
    totalWater: {
      type: Sequelize.INTEGER
    },
    reward: {
      type: Sequelize.STRING
    },
  });

  return WorldTree;
};