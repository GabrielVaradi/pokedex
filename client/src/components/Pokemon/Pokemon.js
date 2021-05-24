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

    const renderStats = (stats) => {
        const allStats = stats.map(stat => {
            return (
                <div className="pokemonStatDetail"> {stat.stat.name}: <strong> {stat.base_stat} </strong></div>
            )
        })
        return allStats
    }

    const renderTypes = (types) => {
        const allTypes = types.map(type => {
            return (
                <div className="pokemonTypeDetail"> {type.type.name} </div>
            )
        })
        return allTypes
    }

    if (pokemon) {
        return (
            <div className="pokemonDetail">

                <div className="pokemonCardDetail">
                    <div className="pokemonNameDetail"> {pokemon.name} </div>
                    <div className="pokemonSpritesDetail">
                        <img  style={{width:"110px"}} src={pokemon.sprites.back_default} alt={pokemon.name}/>
                        <img  style={{width:"110px"}} src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                    <div className="pokemonTypesDetail">
                        {renderTypes(pokemon.types)}
                    </div>
                </div>


                <div className="pokemonEvolutionsStatsDetail">
                    <div className="statsDetail">
                        {renderStats(pokemon.stats)}
                    </div>
                    <div className="pokemonEvolutionsDetail">
                        <div className="pokemonEvolutionDetail">
                            <div style={{fontSize: "18px"}}> Evolves from </div>
                            { pokemon.evolutions && pokemon.evolutions.evolves_from ?
                            <button onClick={() => props.inspectPokemon(evolves_from.id)} style={{border:"none", background:"none"}}>
                                <img src={evolves_from.sprites.front_default} alt={evolves_from.name}/>
                            </button>
                            : 
                            <div>
                                <img src={"/nothing.png"} alt="nothing" /> 
                            </div>
                            }
                        </div>
                        <div className="pokemonEvolutionDetail">
                            <div style={{fontSize: "18px"}}> Evolves into</div>
                            { pokemon.evolutions && pokemon.evolutions.evolves_into ? 
                            <button onClick={() => props.inspectPokemon(evolves_into.id)} style={{border:"none", background:"none"}}>
                                <img src={evolves_into.sprites.front_default} alt={evolves_into.name}/>
                            </button>
                            : 
                            <div>
                                <img src={"/nothing.png"} alt="nothing" /> 
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="statsTitle"> Click on a pokemon to inspect it! </div>
        )
    }

}

export default pokemon