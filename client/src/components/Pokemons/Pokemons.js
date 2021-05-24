import React from 'react';
import Pokemon from "../Pokemon/Pokemon"

const pokemons = (props) => {
    console.log(props.pokemons)
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
            <div> Loading </div>}
    </div>
  )

}

export default pokemons;