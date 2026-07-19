import { useState } from "react";

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);

  return (
    <p
      onClick={() => setEsFavorita(!esFavorita)}
      style={{
        cursor: "pointer",
        color: esFavorita ? "goldenrod" : "black",
        fontWeight: esFavorita ? "bold" : "normal",
      }}
    >
      {titulo} {esFavorita ? "⭐" : ""}
    </p>
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
    <div>
      <h1>Mis Películas Favoritas</h1>

      <p>Total de películas: {peliculas.length}</p>

      <input
        type="text"
        placeholder="Escribe una película"
        value={nuevaPelicula}
        onChange={(e) => setNuevaPelicula(e.target.value)}
      />

      <button onClick={agregarPelicula}>
        Agregar
      </button>

      {peliculas.map((pelicula, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Pelicula titulo={pelicula} />

          <button
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