import React from "react"

const pokemon = (props) => {

    const styles = {
        sprite: {width:"110px"},
        button: {border:"none", background:"none"},
        evolveText: {fontSize: "18px"},
        evolutionSpriteArray: {width:"40px"}
    }

    const pokemon = props.pokemon
    const pokemons = props.pokemons
    let evolves_from
    let evolves_into

    if (pokemon && pokemon.evolutions) {
        if(pokemon.evolutions.evolves_from) {
            evolves_from = pokemons.filter(singlePokemon => singlePokemon.name === pokemon.evolutions.evolves_from)[0]
        }
        if(pokemon.evolutions.evolves_into) {
            if (pokemon.evolutions.evolves_into && Array.isArray(pokemon.evolutions.evolves_into)) {
                evolves_into = []
                pokemon.evolutions.evolves_into.forEach(evolution => {
                    evolves_into.push(pokemons.filter(singlePokemon => singlePokemon.name === evolution))
                })
            } else {
                evolves_into = pokemons.filter(singlePokemon => singlePokemon.name === pokemon.evolutions.evolves_into)[0]   
            }
        }
    }

    const renderStats = (stats) => {
        const allStats = stats.map(stat => {
            return (
                <div key={stat.stat.name} className="pokemonStatDetail"> {stat.stat.name}: <strong> {stat.base_stat} </strong></div>
            )
        })
        return allStats
    }

    const renderTypes = (types) => {
        const allTypes = types.map(type => {
            return (
                <div key={type.type.name} className="pokemonTypeDetail"> {type.type.name} </div>
            )
        })
        return allTypes
    }

    const renderEvolvesInto = (evolution) => {
        if (Array.isArray(evolution)) {
            return (
                <div className="pokemonEvolutionsArray">
                    {evolution.map(evo => {
                        return (
                            <button key={evo[0].id} onClick={() => props.inspectPokemon(evo[0].id)} style={styles.button}>
                                <img src={evo[0].sprites.front_default} alt={evo[0].name} style={styles.evolutionSpriteArray}/>
                            </button> 
                        )
                    })}
                </div>
                    )
        } else {
            return (
                <button onClick={() => props.inspectPokemon(evolution.id)} style={styles.button}>
                    <img src={evolution.sprites.front_default} alt={evolution.name}/>
                </button>
            )

        }
    }

    const renderEvolvesFrom = (evolution) => {
        return (
            <button onClick={() => props.inspectPokemon(evolution.id)} style={styles.button}>
                <img src={evolution.sprites.front_default} alt={evolution.name}/>
            </button>
        )
    }

    const renderNothing = () => {
        return (
            <div>
                <img src={"/nothing.png"} alt="nothing" /> 
            </div>
        )
    }

    if (pokemon) {
        return (
            <div className="pokemonDetail">
                <div className="pokemonCardDetail">
                    <div className="pokemonNameDetail"> {pokemon.name} </div>
                    <div className="pokemonSpritesDetail">
                        <img  style={styles.sprite} src={pokemon.sprites.back_default} alt={pokemon.name}/>
                        <img  style={styles.sprite} src={pokemon.sprites.front_default} alt={pokemon.name}/>
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
                            <div style={styles.evolveText}> Evolves from </div>
                            { pokemon.evolutions && evolves_from ?
                                renderEvolvesFrom(evolves_from)
                            : 
                                renderNothing()
                            }
                        </div>
                        <div className="pokemonEvolutionDetail">
                            <div style={styles.evolveText}> Evolves into</div>
                            { pokemon.evolutions && evolves_into ? 
                                renderEvolvesInto(evolves_into)
                            : 
                                renderNothing()
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