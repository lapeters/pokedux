import React from 'react';
import PropTypes from 'prop-types';
import BarGraph from '../../components/BarGraph/BarGraph';

const TypeList = ({ types }) => {
  const typeList = types.length ? (
    types.map((type) => (
      <li key={type.slot}>
        {type.type.name}
      </li>
    ))
  ) : (
    <p>No types to display.</p>
  );

  return (
    <ul>{typeList}</ul>
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
    <div className="col--4">
      <h2>Types</h2>
      <TypeList types={resPokemon.types} />
      <h2>Stats</h2>
      <BarGraph data={statList} cap="255" />
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
