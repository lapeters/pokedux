import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './scenes/Header/Header';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        name: '',
      },
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { pokemon } = match.params;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      this.setState({
        results: res.data,
      });
    }).catch((error) => (error));
  }

  render() {
    const { results } = this.state;
    return (
      <div className="row">
        <Header name={results.name} />
        <div className="col--12" />
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
