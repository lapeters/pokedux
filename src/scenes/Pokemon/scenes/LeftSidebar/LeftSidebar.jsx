import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading/Heading';

export const GenderRate = ({ genderRate }) => {
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
      <p>Genderless</p>
    </div>
  );
};

GenderRate.propTypes = {
  genderRate: PropTypes.number.isRequired,
};

export const EggGroups = ({ eggGroups }) => {
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

EggGroups.propTypes = {
  eggGroups: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};

export const LeftSidebar = ({ resSpecies }) => (
  <div className="pokemon__sidebar pokemon__sidebar-left col--3">
    <div className="sidebar__wrapper">
      <GenderRate genderRate={resSpecies.gender_rate} />
      <EggGroups eggGroups={resSpecies.egg_groups} />
    </div>
  </div>
);

LeftSidebar.propTypes = {
  resSpecies: PropTypes.shape({
    name: PropTypes.string,
    egg_groups: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    gender_rate: PropTypes.number,
  }).isRequired,
};
