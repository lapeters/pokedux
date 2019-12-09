import React from 'react';
import PropTypes from 'prop-types';

const PokemonImage = ({ id, name }) => {
  const forms = ['mega-x', 'mega-y', 'snowy', 'rainy', 'sunny', 'plant', 'sandy', 'trash', 'mega', 'overcast', 'sunshine', 'east', 'west', 'fan', 'frost', 'heat', 'mow', 'wash', 'altered', 'origin', 'land', 'sky', 'normal', 'blue-striped', 'red-striped', 'standard', 'autumn', 'spring', 'summer', 'winter', 'incarnate', 'therian', 'black', 'white', 'ordinary', 'resolute', 'pirouette', 'archipelago', 'continental', 'elegant', 'fancy', 'garden', 'high-plains', 'icy-snow', 'jungle', 'marine', 'meadow', 'modern', 'monsoon', 'ocean', 'poke-ball', 'polar', 'river', 'sandstorm', 'savanna', 'sun', 'tundra', 'diamond', 'heart', 'star', 'blade', 'shield', 'unbound'];
  const file = require.context('../../../../assets/images/pokemon', true);
  function getSecondPart(str) {
    return str.substr(str.indexOf('-') + 1);
  }
  const s = getSecondPart(name);

  const checkForm = (substring) => {
    if (forms.includes(substring)) {
      return `${String(id)}-${substring}`;
    }
    return String(id);
  };

  const tryImage = (text) => {
    try {
      return file(`./${text}.png`);
    } catch (err) {
      return null;
    }
  };

  return (
    <img src={tryImage(checkForm(s)) ? tryImage(checkForm(s)) : `https://img.pokemondb.net/artwork/vector/${name.toLowerCase()}.png`} alt="" />
  );
};

PokemonImage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokemonImage;
