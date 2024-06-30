import React from "react";
import ListarPokemon from "./components/ListarPokemon"; // Importa el componente ListarPokemon desde la ruta relativa

const Home = () => {
  return (
    <div>
      <ListarPokemon /> {/* Renderiza el componente ListarPokemon dentro de un div */}
    </div>
  );
};

export default Home; // Exporta el componente Home
