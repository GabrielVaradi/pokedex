import React, { Component } from 'react';
import './App.css';


class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: ""
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

  render() {
    console.log(this.state)
    const { pokemons } = this.state.pokemons
    if (this.state.pokemons) {
      return (
        <div className="App">
          {pokemons.name}
          <img src={pokemons.sprites.front_default} alt={pokemons.name}/>
        </div>
      )
    } else {
      return ""
    }
  }
}

export default App;