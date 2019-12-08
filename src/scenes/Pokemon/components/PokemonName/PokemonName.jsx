import React from 'react';
import PropTypes from 'prop-types';

const PokemonName = ({ name }) => {
  const n = name.replace(/-/g, ' ');

  return (
    <div className="pokemon__name"><h1>{n}</h1></div>
  );
};
PokemonName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonName;
