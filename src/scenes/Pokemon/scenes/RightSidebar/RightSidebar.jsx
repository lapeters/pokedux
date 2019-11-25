import React from 'react';
import PropTypes from 'prop-types';
import BarGraph from '../../components/BarGraph/BarGraph';
import Heading from '../../components/Heading/Heading';

const TypeList = ({ types }) => {
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
    <ul className="type__list">{typeList}</ul>
  );
};
TypeList.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    slot: PropTypes.number,
    type: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
};

const LeftSidebar = ({ resPokemon }) => {
  const statList = [];
  const { stats } = resPokemon;

  function getStatName(name) {
    const newName = {
      attack: 'ATK',
      speed: 'SPD',
      defense: 'DEF',
      hp: 'HP',
      'special-attack': 'SATK',
      'special-defense': 'SDEF',
      default: '',
    };
    return (newName[name] || newName.default);
  }

  stats.forEach((item) => {
    statList.push({
      name: getStatName(item.stat.name),
      amount: item.base_stat,
    });
  });

  return (
    <div className="pokemon__sidebar pokemon__sidebar-left col--4">
      <div className="sidebar__wrapper">
        <TypeList types={resPokemon.types} />
        <Heading title="Base Stats" tag="h2" />
        <BarGraph data={statList} cap="255" />
      </div>
    </div>
  );
};

LeftSidebar.propTypes = {
  resPokemon: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.shape({})),
    stats: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default LeftSidebar;
