module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define("news", {
    title: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.TEXT
    }
  });

  return News;
};