import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      this.setState({
        pokemon: res.data.results,
      });
    });
  }

  render() {
    const { pokemon } = this.state;
    const pokemonList = pokemon.length ? (
      pokemon.map((poke) => (
        <div className="pokemon-list" key={poke.name}>
          <h3>{poke.name}</h3>
        </div>
      ))
    ) : (
      <div>No Pokemon here.</div>
    );

    return (
      <div className="row">
        <div className="col--12">
          <h2>Pokemon</h2>
          {pokemonList}
        </div>
      </div>
    );
  }
}
export default Pokemon;
