import React from 'react';
import PropTypes from 'prop-types';

const PokemonSize = ({ height, weight }) => {
  function convertIN(h) {
    return (h * 3.937);
  }

  function convertLB(w) {
    return (w / 4.536);
  }

  return (
    <div className="pokemon__size">
      <div className="size__wrapper">
        <div>
          <h3 className="h5">Height</h3>
          <h3 className="h1">
            {`${convertIN(height).toFixed(2)} in`}
          </h3>
        </div>
        <div>
          <h3 className="h5">Weight</h3>
          <h3 className="h1">{`${convertLB(weight).toFixed(2)} lbs`}</h3>
        </div>
      </div>
    </div>
  );
};
PokemonSize.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};
export default PokemonSize;
