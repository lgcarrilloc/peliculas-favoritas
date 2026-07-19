import { useState } from "react";

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);

  return (
    <div
      className={`pelicula ${esFavorita ? "favorita" : ""}`}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      {titulo} {esFavorita ? "⭐" : ""}
    </div>
  );
}

function App() {
  const [peliculas, setPeliculas] = useState([
    "Son como niños",
    "Son como niños 2",
    "Iron Man",
    "Iron Man 2",
    "Avengers Endgame",
  ]);

  const [nuevaPelicula, setNuevaPelicula] = useState("");

  const agregarPelicula = () => {
    if (nuevaPelicula.trim() !== "") {
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula("");
    }
  };

  const eliminarPelicula = (indexEliminar) => {
    setPeliculas(
      peliculas.filter((_, index) => index !== indexEliminar)
    );
  };

  return (
    <div className="container">
      <h1>🎬 Mis Películas Favoritas</h1>

      <p className="contador">
        Total de películas: {peliculas.length}
      </p>

      <div className="formulario">
        <input
          type="text"
          placeholder="Escribe una película"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
        />

        <button onClick={agregarPelicula}>
          Agregar
        </button>
      </div>

      {peliculas.map((pelicula, index) => (
        <div
          key={index}
          className="pelicula-container"
        >
          <Pelicula titulo={pelicula} />

          <button
            className="btn-eliminar"
            onClick={() => eliminarPelicula(index)}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;