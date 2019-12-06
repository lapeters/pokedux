import React from 'react';
import PropTypes from 'prop-types';

const PokemonName = ({ name }) => {
  const n = name.replace(/-/g, ' ');

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <h1>{capitalize(n)}</h1>
  );
};
PokemonName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonName;
