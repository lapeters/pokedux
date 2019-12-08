import React from 'react';
import PropTypes from 'prop-types';

const PokemonImage = ({ id, name }) => {
  const file = require.context('../../../../assets/images/pokemon', true);

  const tryImage = () => {
    try {
      return file(`./${String(id)}.png`);
    } catch (err) {
      return null;
    }
  };

  return (
    <img src={tryImage() ? tryImage() : `https://img.pokemondb.net/artwork/vector/${name.toLowerCase()}.png`} alt="" />
  );
};

PokemonImage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokemonImage;
