import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos CSS de Bootstrap
import React from "react"; // Importa React

// Componente funcional PokemonDetails que recibe la prop data
const PokemonDetails = ({ data }) => {
  // Si no hay datos, retorna null y no renderiza nada
  if (!data) return null;

  // Renderiza los detalles del Pokémon usando Bootstrap para el diseño y estilos
  return (
    <div className="card mx-auto my-4" style={{ maxWidth: "600px" }}>
      <img
        src={data.sprites.front_default} // Imagen del Pokémon
        className="card-img-top"
        alt={data.name} // Alt para accesibilidad
      />
      <div className="card-body">
        <h4 className="card-title">{data.name.toUpperCase()}</h4> {/* Nombre del Pokémon en mayúsculas */}
        <p className="card-text">ID: {data.id}</p> {/* ID del Pokémon */}
        <p className="card-text">Base Experience: {data.base_experience}</p> {/* Experiencia base del Pokémon */}
        <p className="card-text">Height: {data.height}</p> {/* Altura del Pokémon */}
        <p className="card-text">Weight: {data.weight}</p> {/* Peso del Pokémon */}
        <p className="card-text">Species: {data.species.name}</p> {/* Especie del Pokémon */}

        {/* Lista de habilidades del Pokémon */}
        <h6>Abilities:</h6>
        <ul className="list-group list-group-flush">
          {data.abilities.map((ability, index) => (
            <li key={index} className="list-group-item">
              {ability.ability.name} (Hidden: {ability.is_hidden ? "Yes" : "No"}
              , Slot: {ability.slot})
            </li>
          ))}
        </ul>

        {/* Estadísticas del Pokémon */}
        <h6 className="mt-3">Stats:</h6>
        <ul className="list-group list-group-flush">
          {data.stats.map((stat, index) => (
            <li key={index} className="list-group-item">
              {stat.stat.name} (Base Stat: {stat.base_stat}, Effort:{" "}
              {stat.effort})
            </li>
          ))}
        </ul>

        {/* Tipos del Pokémon */}
        <h6 className="mt-3">Types:</h6>
        <ul className="list-group list-group-flush">
          {data.types.map((type, index) => (
            <li key={index} className="list-group-item">
              {type.type.name}
            </li>
          ))}
        </ul>

        {/* Movimientos del Pokémon */}
        <h6 className="mt-3">Moves:</h6>
        <ul className="list-group list-group-flush">
          {data.moves.map((move, index) => (
            <li key={index} className="list-group-item">
              {move.move.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails; // Exporta el componente PokemonDetails
