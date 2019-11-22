import React from 'react';
import PropTypes from 'prop-types';

const EvolutionChain = ({ resEvolve }) => {
  const evoChain = [];
  const evoData = resEvolve.chain;

  console.log(evoData.evolves_to.length);

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
};

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

const RightSidebar = ({ resSpecies, resEvolve }) => {
  if (Object.keys(resSpecies).length <= 1 && Object.keys(resEvolve).length <= 1) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="col--4">
      <h2>Evolution Chain</h2>
      <EvolutionChain resEvolve={resEvolve} />
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
  resEvolve: PropTypes.shape({}).isRequired,
};

export default RightSidebar;
