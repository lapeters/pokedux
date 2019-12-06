import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';

const PokemonBreeding = ({ eggGroups }) => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const eggGroupsList = eggGroups.length ? (
    eggGroups.map((group) => (
      <li key={group.name}>
        {capitalize(group.name)}
      </li>
    ))
  ) : (
    <li>No egg groups listed</li>
  );

  return (
    <div className="pokemon__egg-groups">
      <Heading title="Egg Groups" tag="h2" />
      <ul>
        {eggGroupsList}
      </ul>
    </div>
  );
};

PokemonBreeding.propTypes = {
  eggGroups: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};

export default PokemonBreeding;
