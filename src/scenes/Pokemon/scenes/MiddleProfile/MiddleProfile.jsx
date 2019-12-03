import React from 'react';
import PropTypes from 'prop-types';

export const NamePokemon = ({ name }) => {
  const n = name.replace(/-/g, ' ');

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <h1>{capitalize(n)}</h1>
  );
};
NamePokemon.propTypes = {
  name: PropTypes.string.isRequired,
};

export const ImgPokemon = ({ id }) => {
  const image = require.context('../../../../assets/pokemon', true);
  return (
    <img src={image(`./${String(id)}.png`)} alt="" />
  );
};
ImgPokemon.propTypes = {
  id: PropTypes.number.isRequired,
};

export const MiddleProfile = ({ id, name }) => (
  <div className="pokemon__profile col--4">
    <div className="profile__wrapper">
      <NamePokemon name={name} />
      <ImgPokemon id={id} />
    </div>
  </div>
);

MiddleProfile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default MiddleProfile;
