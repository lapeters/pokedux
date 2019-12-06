import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';

const PokemonDesc = ({ desc }) => {
  const result = desc.filter((obj) => (obj.language.name === 'en'));

  return (
    <div className="pokemon__description">
      <Heading title="About" tag="h2" />
      <p>{result[0].flavor_text}</p>
    </div>
  );
};
PokemonDesc.propTypes = {
  desc: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.shape({
      name: PropTypes.name,
    }),
  })).isRequired,
};

export default PokemonDesc;
