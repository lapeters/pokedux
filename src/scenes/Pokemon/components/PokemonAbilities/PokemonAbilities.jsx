import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';

const PokemonAbilities = ({ abilities }) => {
  function formatAbility(name) {
    const frags = name.split('-');
    for (let i = 0; i < frags.length; i += 1) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  const abilityList = abilities.length ? (
    abilities.map((i) => {
      const { data } = i;
      const desc = data.flavor_text_entries.filter((obj) => (obj.language.name === 'en'));
      return (
        <li key={data.id}>
          <strong>{`${formatAbility(data.name)}: `}</strong>
          {desc[0].flavor_text}
        </li>
      );
    })
  ) : (
    <p>No abilities to display</p>
  );
  return (
    <div className="pokemon__abilities">
      <Heading title="Abilities" tag="h2" />
      <ul>
        {abilityList}
      </ul>
    </div>
  );
};

PokemonAbilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.shape({
      name: PropTypes.string,
      flavor_text_entries: PropTypes.arrayOf(PropTypes.shape({
        flavor_text: PropTypes.string,
        language: PropTypes.shape({
          name: PropTypes.string,
        }),
      })),
    }),
  })).isRequired,
};

export default PokemonAbilities;
