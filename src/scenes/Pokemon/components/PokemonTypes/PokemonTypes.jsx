import React from 'react';
import PropTypes from 'prop-types';

const PokemonTypes = ({ types }) => {
  const typeList = types.length ? (
    types.map((type) => (
      <li key={type.slot} className={`type type-${type.type.name}`}>
        {type.type.name}
      </li>
    ))
  ) : (
    <p>No types to display.</p>
  );

  return (
    <div className="pokemon__types">
      <ul className="type__list">{typeList}</ul>
    </div>
  );
};
PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    slot: PropTypes.number,
    type: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
};

export default PokemonTypes;
