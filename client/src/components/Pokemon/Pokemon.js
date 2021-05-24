import React from "react"

const pokemon = (props) => {

    const pokemon = props.pokemon
    const pokemons = props.pokemons
    let evolves_from
    let evolves_into

    if (pokemon && pokemon.evolutions) {
        if(pokemon.evolutions.evolves_from) {
            evolves_from = pokemons.filter(singlePokemon => singlePokemon.name === pokemon.evolutions.evolves_from)[0]
        }
        if(pokemon.evolutions.evolves_into) {
            evolves_into = pokemons.filter(singlePokemon => singlePokemon.name === pokemon.evolutions.evolves_into)[0]   
        }
    }
    // Stats, type, 2-4 sprites, name, evolution, devolution

    if (pokemon) {
        return (
            <React.Fragment>
                <div> {pokemon.name} </div>
                <div> {pokemon.types[0].type.name} </div>
                <div> {pokemon.stats[0].stat.name} {pokemon.stats[0].base_stat}</div>
                <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                { pokemon.evolutions && pokemon.evolutions.evolves_from ?
                <React.Fragment>
                    <div> Evolves from </div>
                    <img src={evolves_from.sprites.front_default} alt={evolves_from.name}/>
                </React.Fragment>
                : ""}
                { pokemon.evolutions && pokemon.evolutions.evolves_into ? 
                <React.Fragment>
                    <div> Evolves into </div>
                    <img src={evolves_into.sprites.front_default} alt={evolves_into.name}/>
                </React.Fragment>
                : ""
                }
            </React.Fragment>
        )
    } else {
        return (
            <div> Click on a pokemon to inspect it! </div>
        )
    }

}

export default pokemon