import React from 'react';
import PropTypes from 'prop-types';

/* const EvolutionChain = ({ resEvolve }) => {
  function list() {
    const evoChain = [];
    const evoData = resEvolve.chain;
    Object.keys(evoData).forEach((key) => evoChain.push(evoData[key]));
    return evoChain;
  }

  console.log(list());
  return (
    <div />
  );
};

EvolutionChain.propTypes = {
  resEvolve: PropTypes.shape({
    chain: PropTypes.shape({
      evolves_to: PropTypes.arrayOf(PropTypes.shape()),
    }),
  }).isRequired,
}; */

const GenderRate = ({ genderRate }) => {
  const femRate = ((genderRate / 8) * 100);
  const maleRate = (100 - femRate);

  return (
    <div>
      <p>{`Female: ${femRate}%`}</p>
      <p>{`Male: ${maleRate}%`}</p>
    </div>
  );
};

GenderRate.propTypes = {
  genderRate: PropTypes.number.isRequired,
};

const EggGroups = ({ eggGroups }) => {
  const eggGroupsList = eggGroups.length ? (
    eggGroups.map((group) => (
      <li key={group.name}>
        {group.name}
      </li>
    ))
  ) : (
    <li>No egg groups listed</li>
  );

  return (
    <ul>
      {eggGroupsList}
    </ul>
  );
};

EggGroups.propTypes = {
  eggGroups: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};

const RightSidebar = ({ resSpecies }) => {
  if (Object.keys(resSpecies).length <= 1) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="col--4">
      <h2>Breeding</h2>
      <h3>Gender Rate</h3>
      <GenderRate genderRate={resSpecies.gender_rate} />
      <h3>Egg Groups</h3>
      <EggGroups eggGroups={resSpecies.egg_groups} />
    </div>
  );
};

RightSidebar.propTypes = {
  resSpecies: PropTypes.shape({
    name: PropTypes.string,
    egg_groups: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    gender_rate: PropTypes.number,
  }).isRequired,
};

export default RightSidebar;
