module.exports = (sequelize, Sequelize) => {
  const HomePage = sequelize.define("homePage", {
    pvuToLe: {
      type: Sequelize.INTEGER
    },
    leToPvu: {
      type: Sequelize.INTEGER
    },
    nextLeToPvu: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.STRING
    }
  });

  return HomePage;
};