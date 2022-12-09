import React, { useState, useEffect } from "react";
import "./Insert.css";

const Insert = (props) => {
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [director, setDirector] = useState("");

    const insertar = () => {
        let datos = {
            method: "post",
            body: JSON.stringify({
                titulo,
                genero,
                director
            }),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("/insertpelicula", datos)
            .then((res) => res.json(res))
            .then((res) => {
                alert("Se ha insertado la pelicula '" + res.titulo + "'")
            });
    };

    return (
        <div id="isertarPeli">
            <p>Inserta una película</p>
            <input type="text" id="titulo" name="titulo" placeholder="Título" onChange={(e) => setTitulo(e.target.value)} />
            <input type="text" id="genero" name="genero" placeholder="Género" onChange={(e) => setGenero(e.target.value)} />
            <input type="text" id="director" name="director" placeholder="Director" onChange={(e) => setDirector(e.target.value)} />
            <button onClick={() => insertar()}>Insertar</button>
        </div>
    );
};

export default Insert;