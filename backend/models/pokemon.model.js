module.exports = (sequelize, Sequelize) => {
  const Pokemon = sequelize.define("pokemon", {
    numpokemon: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    type1: {
      type: Sequelize.STRING
    },
    type2: {
      type: Sequelize.STRING
    },
    hp: {
      type: Sequelize.INTEGER
    },
    attack: {
      type: Sequelize.INTEGER
    },
    defense: {
      type: Sequelize.INTEGER
    },
    sp_attack: {
      type: Sequelize.INTEGER
    },
    sp_defense: {
      type: Sequelize.INTEGER
    },
    speed: {
      type: Sequelize.INTEGER
    },
    filename: {
      type: Sequelize.STRING
    },
  });

  return Pokemon;
}