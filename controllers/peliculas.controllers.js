const peliculaModel = require("../models/peliculas.model");

const Peliculas = {
    /**
     * Inserta una pelicula en la base de datos de mongo
     * @param {*} req ej:req.body = { titulo: 'titulo', genero: 'genero', director: 'director' }
     * @param {*} res 
     */
    insertPelicula: async (req, res) => {
        const {titulo, genero, director} = req.body;
        console.log(req.body);
        res.json(await peliculaModel.create({titulo, genero, director }));
    },
};

module.exports = Peliculas;