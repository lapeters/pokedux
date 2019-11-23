import React from 'react';
import PropTypes from 'prop-types';

const MiddleProfile = ({ id }) => {
  const image = require.context('../../../../assets/pokemon', true);

  return (
    <div className="pokemon__profile col--4">
      <div className="profile__wrapper">
        <img src={image(`./${id}.png`)} alt="" />
      </div>
    </div>
  );
};

MiddleProfile.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MiddleProfile;
