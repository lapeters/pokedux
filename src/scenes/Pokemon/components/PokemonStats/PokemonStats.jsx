import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import BarGraph from '../BarGraph/BarGraph';

const PokemonStats = ({ stats }) => {
  const statList = [];

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
    <div className="pokemon__stats">
      <Heading title="Base Stats" tag="h2" />
      <BarGraph data={statList} cap="255" />
    </div>
  );
};

PokemonStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokemonStats;
