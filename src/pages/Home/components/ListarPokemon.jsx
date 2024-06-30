import "bootstrap/dist/css/bootstrap.min.css";// Importa estilos CSS de Bootstrap
import React, { useEffect, useState } from "react";// Importa React y sus hooks useEffect y useState
import PokemonDetails from "../../../components/container/PokemonDetails";// Importa el componente PokemonDetails

function ListarPokemon() {// Estado para almacenar la lista de Pokémon
  const [pokemonList, setPokemonList] = useState([]);// Estado para almacenar el Pokémon seleccionado
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    // Efecto para obtener la lista de Pokémon al cargar el componente
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?"// URL de la API para obtener la lista de Pokémons
        );
        const data = await response.json();// Convierte la respuesta a formato JSON
        setPokemonList(data.results);// Actualiza el estado con la lista de Pokémon obtenida
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);// Manejo de errores en caso de fallo en la solicitud
      }
    };

    fetchPokemonList();// Llama a la función para obtener la lista de Pokémon al cargar el componente
  }, []);// El efecto se ejecuta una vez al cargar el componente, debido al arreglo de dependencias vacío

  const handlePokemonClick = async (url) => {// Función para manejar el click en un Pokémon de la lista
    try {
      const response = await fetch(url);// Realiza una solicitud para obtener los detalles del Pokémon
      const data = await response.json(); // Actualiza el estado con los detalles del Pokémon seleccionado
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);// Manejo de errores en caso de fallo en la solicitud
    }
  };
//Contenedor principal con margen 
  return (
    <div className="container my-4">
      <center>
        <h4 className="mb-4">Listado de Pokémon</h4>
      </center>
      <center>
        <h4 className="mb-4">
          (haz click en los recuadros para ver más información)
        </h4>
      </center>
      <div className="row">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="col-md-4 mb-3">
            <div
              className="card"
              onClick={() => handlePokemonClick(pokemon.url)}// Maneja el click en el Pokémon para cargar detalles
            >
              <div className="card-body">
                <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedPokemon && <PokemonDetails data={selectedPokemon} />}
    </div>
  );
}

export default ListarPokemon;// Exporta el componente ListarPokemon
