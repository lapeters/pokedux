import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading/Heading';

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
  if (genderRate !== -1) {
    const femRate = ((genderRate / 8) * 100);
    const maleRate = (100 - femRate);
    return (
      <div>
        <p>{`Female: ${femRate}%`}</p>
        <p>{`Male: ${maleRate}%`}</p>
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
    <div className="pokemon__sidebar pokemon__sidebar-right col--3">
      <div className="sidebar__wrapper">
        <Heading title="Gender Rates" tag="h2" />
        <GenderRate genderRate={resSpecies.gender_rate} />
        <Heading title="Egg Groups" tag="h2" />
        <EggGroups eggGroups={resSpecies.egg_groups} />
      </div>
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
