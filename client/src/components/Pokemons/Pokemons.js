import React from 'react';

const pokemons = (props) => {
  return (
    <div className="Pokemons">
      {props.pokemons !== undefined ? 
        props.pokemons.map(pokemon => {
            return (
                <button onClick={() => props.inspectPokemon(pokemon.id)} className="pokemonCard" key={pokemon.id}>
                    <img className="pokemon" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <div className="pokemonName">
                    {pokemon.name}
                    </div> 
                </button>
            )
        }) :
            <div className="loading"> Loading </div>}
    </div>
  )
}

export default pokemons;