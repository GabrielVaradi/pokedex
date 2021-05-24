import React, {Component} from "react"
import LeftPokedex from "../../components/PokedexSides/LeftPokedex/LeftPokedex"
import RightPokedex from "../../components/PokedexSides/RightPokedex/RightPokedex"

class Pokedex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: undefined,
            currentPagePokemons: undefined,
            inspectedPokemon: undefined
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
                this.setState({ pokemons: res, currentPagePokemons: currentPagePokemons })
            })
    }

    inspectPokemon = (id) => {
        const inspectedPokemon = this.state.pokemons.filter(pokemon => pokemon.id === id)
        this.setState({
            inspectedPokemon: inspectedPokemon[0]
        })
    }
    
    previousPage = () => {
        const firstPokemonIndex = this.state.pokemons.indexOf(this.state.currentPagePokemons[0])
        const currentPagePokemons = []
        let i

        if (firstPokemonIndex === 0) {
            for (i=this.state.pokemons.length-6; i < this.state.pokemons.length; i++) {
                currentPagePokemons.push(this.state.pokemons[i])
            }
        } else {
            for (i=firstPokemonIndex-6; i < firstPokemonIndex; i++) {
                if (this.state.pokemons[i] !== undefined) {
                    currentPagePokemons.push(this.state.pokemons[i])
                }
            }
        }
        this.setState({ currentPagePokemons: currentPagePokemons })
    }

    nextPage = () => {
        const lastPokemonIndex = this.state.pokemons.indexOf(this.state.currentPagePokemons[this.state.currentPagePokemons.length-1])
        const currentPagePokemons = []
        let i
        if (lastPokemonIndex === this.state.pokemons.length-1) {
            for (i = 0; i < 6; i++) {
                currentPagePokemons.push(this.state.pokemons[i])
            }
        } else {
            for (i = lastPokemonIndex+1; i < lastPokemonIndex+7; i++) {
                if (this.state.pokemons[i] !== undefined) {
                    currentPagePokemons.push(this.state.pokemons[i])
                }
            }
        }
        this.setState({ currentPagePokemons: currentPagePokemons })
    }

    render() {
        return (
            <div className="pokedex">
                <LeftPokedex pokemons={this.state.currentPagePokemons}
                    inspectPokemon={this.inspectPokemon}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
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