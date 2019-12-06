import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BarGraph from '../../components/BarGraph/BarGraph';
import Heading from '../../components/Heading/Heading';

export const DescPokemon = ({ desc }) => {
  const result = desc.filter((obj) => (obj.language.name === 'en'));

  return (
    <div className="pokemon__description">
      <Heading title="About" tag="h2" />
      <p>{result[0].flavor_text}</p>
    </div>
  );
};
DescPokemon.propTypes = {
  desc: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.shape({
      name: PropTypes.name,
    }),
  })).isRequired,
};

export const AboutPokemon = ({ height, weight }) => {
  function convertIN(h) {
    return (h * 3.937);
  }

  function convertLB(w) {
    return (w / 4.536);
  }

  return (
    <div className="pokemon__about">
      <div className="about__wrapper">
        <div>
          <h3 className="h5">Height</h3>
          <h3 className="h1">
            {`${convertIN(height).toFixed(2)} in`}
          </h3>
        </div>
        <div>
          <h3 className="h5">Weight</h3>
          <h3 className="h1">{`${convertLB(weight).toFixed(2)} lbs`}</h3>
        </div>
      </div>
    </div>
  );
};
AboutPokemon.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

export const TypeList = ({ types }) => {
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
    <div className="pokemon__types">
      <ul className="type__list">{typeList}</ul>
    </div>
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

export const Abilities = ({ abilities }) => {
  function formatAbility(name) {
    const frags = name.split('-');
    for (let i = 0; i < frags.length; i += 1) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
  const abilityList = abilities.length ? (
    abilities.map((item) => (
      <div>
        <p>{`${formatAbility(item.ability.name)}:`}</p>
      </div>
    ))
  ) : (
    <p>No abilities to display</p>
  );
  return (
    <div className="pokemon__abilities">
      <Heading title="Abilities" tag="h2" />
      {abilityList}
    </div>
  );
};
Abilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape({
    ability: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
};

export const BaseStats = ({ stats }) => {
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

BaseStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export const RightSidebar = ({ resPokemon }) => (
  <div className="pokemon__sidebar pokemon__sidebar-right col--4">
    <div className="sidebar__wrapper">
      <TypeList types={resPokemon.types} />
      <AboutPokemon height={resPokemon.height} weight={resPokemon.weight} />
      <BaseStats stats={resPokemon.stats} />
    </div>
  </div>
);


RightSidebar.propTypes = {
  resPokemon: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.shape({})),
    stats: PropTypes.arrayOf(PropTypes.shape({})),
    height: PropTypes.number,
    weight: PropTypes.number,
  }).isRequired,
};
