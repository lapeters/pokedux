import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';

const PokemonGender = ({ genderRate }) => {
  if (genderRate !== -1) {
    const femRate = ((genderRate / 8) * 100);
    const maleRate = (100 - femRate);
    return (
      <div className="pokemon__gender-rate">
        <Heading title="Gender Rates" tag="h2" />
        <div className="gender-rate__wrapper">
          <div>
            <h3 className="h5">Female</h3>
            <h3 className="h1">
              {`${femRate}%`}
            </h3>
          </div>
          <div>
            <h3 className="h5">Male</h3>
            <h3 className="h1">{`${maleRate}%`}</h3>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Gender Rates" tag="h2" />
      <div className="gender-rate__wrapper">
        <p>Genderless</p>
      </div>
    </div>
  );
};

PokemonGender.propTypes = {
  genderRate: PropTypes.number.isRequired,
};

export default PokemonGender;
