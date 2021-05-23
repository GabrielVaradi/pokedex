import React, { Component } from 'react';
import './App.scss';


class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: undefined
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

  renderPokemons = (pokemons) => {
    return pokemons.map(pokemon => {
      return (
          <div>
            <div className={"pokemonName"}>
              {pokemon.name}
            </div> 
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          </div>
      )
    })
  }

  render() {
    console.log(this.state)
      return (
        <div className="App">
          {this.state.pokemons !== undefined ? this.renderPokemons(this.state.pokemons) : ""}
        </div>
      )

  }
}

export default App;