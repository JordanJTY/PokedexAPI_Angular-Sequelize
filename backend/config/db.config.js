module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Jordan75",
  DB: "db_pokemon",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}