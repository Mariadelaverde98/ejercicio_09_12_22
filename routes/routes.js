const router = require("express").Router();
const pelicula = require("../controllers/peliculas.controllers");

router.post("/insertpelicula", pelicula.insertPelicula);

module.exports = router;