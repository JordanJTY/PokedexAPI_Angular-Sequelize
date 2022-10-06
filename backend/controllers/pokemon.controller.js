const db = require("../models");
const Pokemon = db.pokemon;
const Op = db.Sequelize.Op;

// Create and Save a new Pokemon
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Pokemon
  const pokemon = {
    numpokemon: req.body.numpokemon,
    name: req.body.name,
    type1: req.body.type1,
    type2: req.body.type2,
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    sp_attack: req.body.sp_attack,
    sp_defense: req.body.sp_defense,
    speed: req.body.speed,
    filename: req.file ? req.file.filename : ""
  }

  // Save Pokemon in the database
  Bicycle.create(pokemon).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the pokemon"
    })
  });
};

// Retrieve all Pokemon from the database.
exports.findAll = (req, res) => {
  Pokemon.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Pokemon"
    })
  })
};

// Find a single Pokemon with an id
exports.findOne = (req, res) => {
  Pokemon.findOne().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving the Pokemon"
    })
  })
}

// Update a Pokemon by the id in the request
exports.update = (req, res) => {
  Pokemon.update().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while updating the Pokemon"
    })
  })
};

// Delete a Pokemon with the specified id in the request
exports.delete = (req, res) => {
  Pokemon.delete().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while deleting the Pokemon"
    })
  })
};
