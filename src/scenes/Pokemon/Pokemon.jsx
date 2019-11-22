import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './scenes/Header/Header';
import RightSidebar from './scenes/RightSidebar/RightSidebar';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCalled: false,
      isFetching: false,
      resPokemon: [],
      resSpecies: [],
      resEvolve: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { match } = this.props;
    const { pokemon } = match.params;
    this.setState({
      apiCalled: true,
      isFetching: true,
    });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        this.setState({
          resPokemon: res.data,
        });
        return axios.get(res.data.species.url);
      })
      .then((res) => {
        this.setState({
          resSpecies: res.data,
        });
        return axios.get(res.data.evolution_chain.url);
      })
      .then((res) => {
        this.setState({
          resEvolve: res.data,
          isFetching: false,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isFetching: false });
      });
  };

  render() {
    const {
      apiCalled, isFetching, resPokemon, resSpecies, resEvolve,
    } = this.state;
    if (apiCalled === true && isFetching === false) {
      return (
        <div className={`row ${resSpecies.color.name}`}>
          <Header name={resPokemon.name} />
          <RightSidebar resSpecies={resSpecies} resEvolve={resEvolve} />
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col--12">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemon: PropTypes.string,
    }),
  }).isRequired,
};

export default Pokemon;
