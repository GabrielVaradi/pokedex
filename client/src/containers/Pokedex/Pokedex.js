import React, {Component} from "react"
import LeftPokedex from "../../components/PokedexSides/LeftPokedex/LeftPokedex"
import RightPokedex from "../../components/PokedexSides/RightPokedex/RightPokedex"

class Pokedex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: undefined,
            inspectedPokemon: undefined
        }
    }

    componentDidMount() {
        this.callApi()
    }

    callApi = () => {
    fetch("http://localhost:3001")
        .then(res => res.json())
        .then(res => this.setState({ pokemons: res }));
    }

    inspectPokemon = (id) => {
        const inspectedPokemon = this.state.pokemons.filter(pokemon => pokemon.id === id)
        this.setState({
            inspectedPokemon: inspectedPokemon[0]
        })
    }

    

    render() {
        return (
            <div className="pokedex">
                <LeftPokedex pokemons={this.state.pokemons} inspectPokemon={this.inspectPokemon}/>
                <RightPokedex pokemons={this.state.pokemons} pokemon={this.state.inspectedPokemon}/>
            </div>

        )
    }
}
    
export default Pokedex