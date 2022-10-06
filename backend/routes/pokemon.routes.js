module.exports = app => {
  const pokemons = require("../controllers/pokemon.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Pokemon
  router.post("/", upload.single('file'), pokemons.create);
  // router.post("/", pokemons.create);

  // Retrieve all Pokemon
  router.get("/", pokemons.findAll);

  // Retrieve a single Pokemon with id
  router.get("/:id", pokemons.findOne);

  // Update a Pokemon with id
  router.put("/:id", pokemons.update);

  // Delete a Pokemon with id
  router.delete("/:id", pokemons.delete);

  app.use("/api/pokemon", router);
}