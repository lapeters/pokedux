import React from 'react';
import PropTypes from 'prop-types';

const PokemonImage = ({ id }) => {
  const image = require.context('../../../../assets/images/pokemon', true);
  return (
    <img src={image(`./${String(id)}.png`)} alt="" />
  );
};

PokemonImage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PokemonImage;
