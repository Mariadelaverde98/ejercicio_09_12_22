const mongoose = require("mongoose");

const pelicula = {
    titulo: String, 
    genero: String, 
    director: String,
};

const peliculaSchema = mongoose.Schema(pelicula, {
    versionKey: false,
});


const Peliculas = mongoose.model("peliculas", peliculaSchema);

module.exports = Peliculas;
