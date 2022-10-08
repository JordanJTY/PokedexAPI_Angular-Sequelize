const db = require("../models");
const Pokemon = db.pokemon;
const Op = db.Sequelize.Op;

// Create and Save a new Pokemon
exports.create = (req, res) => {
  // Validate request
  if (!req.body.numpokemon || !req.body.name || !req.body.type1 || !req.body.hp || !req.body.attack ||
    !req.body.defense || !req.body.sp_attack || !req.body.sp_defense || !req.body.speed) {
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
  Pokemon.create(pokemon).then(data => {
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
  const id = req.params.id;
  Pokemon.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pokemon with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pokemon with id=" + id
      });
    });
}

// Update a Pokemon by the id in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body.numpokemon || !req.body.name || !req.body.type1 || !req.body.hp || !req.body.attack ||
    !req.body.defense || !req.body.sp_attack || !req.body.sp_defense || !req.body.speed) {
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
  const id = req.params.id;
  Pokemon.update(pokemon, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Pokemon was updated successfully.`
        });
      } else {
        res.send({
          message: `Cannot update Pokemon with id=${id}. Maybe Pokemon was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pokemon with id=" + id
      });
    });
};

// Delete a Pokemon with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pokemon.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pokemon was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pokemon with id=${id}. Maybe Pokemon was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pokemon with id=" + id
      });
    });
};
