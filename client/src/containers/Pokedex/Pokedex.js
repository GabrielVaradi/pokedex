import React, {Component} from "react"
import LeftPokedex from "../../components/PokedexSides/LeftPokedex/LeftPokedex"
import RightPokedex from "../../components/PokedexSides/RightPokedex/RightPokedex"

class Pokedex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: undefined,
            currentPagePokemons: undefined,
            inspectedPokemon: undefined,
            filteredPokemons: undefined
        }
    }

    componentDidMount() {
        this.callApi()
    }

    callApi = () => {
        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(res => {
                const currentPagePokemons = []
                for (let i = 0; i < 6; i++) {
                    currentPagePokemons.push(res[i])
                }
                this.setState({ pokemons: res, currentPagePokemons: currentPagePokemons, filteredPokemons: res })
            })
    }

    inspectPokemon = (id) => {
        const inspectedPokemon = this.state.pokemons.filter(pokemon => pokemon.id === id)
        this.setState({
            inspectedPokemon: inspectedPokemon[0]
        })
    }
    
    previousPage = () => {
        const pokemons = this.state.filteredPokemons
        const firstPokemonIndex = pokemons.indexOf(this.state.currentPagePokemons[0])
        const currentPagePokemons = []
        let i

        if (firstPokemonIndex === 0) {
            for (i=pokemons.length-6; i < pokemons.length; i++) {
                if (pokemons[i] !== undefined) {
                    currentPagePokemons.push(pokemons[i])
                }
            }
        } else {
            for (i=firstPokemonIndex-6; i < firstPokemonIndex; i++) {
                if (pokemons[i] !== undefined) {
                    currentPagePokemons.push(pokemons[i])
                }
            }
        }
        this.setState({ currentPagePokemons: currentPagePokemons })
    }

    nextPage = () => {
        const pokemons = this.state.filteredPokemons
        const lastPokemonIndex = pokemons.indexOf(this.state.currentPagePokemons[this.state.currentPagePokemons.length-1])
        let currentPagePokemons = []
        let i
        if (lastPokemonIndex === pokemons.length-1) {
            for (i = 0; i < 6; i++) {
                if (pokemons[i] !== undefined) {
                    currentPagePokemons.push(pokemons[i])
                }
            }
        } 
        else {
            for (i = lastPokemonIndex+1; i < lastPokemonIndex+7; i++) {
                if (pokemons[i] !== undefined) {
                    currentPagePokemons.push(pokemons[i])
                }
            }
        }
        this.setState({ currentPagePokemons: currentPagePokemons })
    }

    filterPokemons = (event) => {
        const filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(event.target.value.toLowerCase()))
        const currentPagePokemons = []
                for (let i = 0; i < 6; i++) {
                    if (filteredPokemons[i] !== undefined) {
                        currentPagePokemons.push(filteredPokemons[i])
                    }
                }
        this.setState({
            currentPagePokemons: currentPagePokemons, filteredPokemons: filteredPokemons
        })
    }

    render() {
        return (
            <div className="pokedex">
                <LeftPokedex pokemons={this.state.currentPagePokemons}
                    inspectPokemon={this.inspectPokemon}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    filterPokemons={this.filterPokemons}
                    />
                <RightPokedex 
                    pokemons={this.state.pokemons}
                    pokemon={this.state.inspectedPokemon} 
                    inspectPokemon={this.inspectPokemon}
                    />
            </div>

        )
    }
}
    
export default Pokedex