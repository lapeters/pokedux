import React from 'react';
import PropTypes from 'prop-types';

const MiddleProfile = ({ id, name }) => {
  const image = require.context('../../../../assets/pokemon', true);
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="pokemon__profile col--4">
      <div className="profile__wrapper">
        <h1>{capitalize(name)}</h1>
        <img src={image(`./${String(id)}.png`)} alt="" />
      </div>
    </div>
  );
};

MiddleProfile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default MiddleProfile;
