import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Tabs from '../../components/Tabs/Tabs';
import Header from './scenes/Header/Header';
import {
  TypeList,
  AboutPokemon,
  BaseStats,
  DescPokemon,
} from './scenes/RightSidebar/RightSidebar';
import { GenderRate, EggGroups } from './scenes/LeftSidebar/LeftSidebar';
import { NamePokemon, ImgPokemon, MiddleProfile } from './scenes/MiddleProfile/MiddleProfile';
import NoMatch from './scenes/NoMatch/NoMatch';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCalled: false,
      isFetching: false,
      error: false,
      resPokemon: [],
      resSpecies: [],
      resEvolve: [],
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.fetchPokemon();
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    const { pokemon } = match.params;
    if (prevProps.match.params.pokemon !== pokemon) {
      this.fetchPokemon();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  fetchPokemon = () => {
    const { match } = this.props;
    const { pokemon } = match.params;
    this.setState({
      apiCalled: true,
      isFetching: true,
      error: false,
    });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        this.setState({
          resPokemon: res.data,
        });
        return axios.get(res.data.species.url);
      })
      .then((res) => {
        this.setState({
          resSpecies: res.data,
          isFetching: false,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          isFetching: false,
          error: true,
        });
      });
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const {
      apiCalled, isFetching, resPokemon, resSpecies, resEvolve, error,
    } = this.state;
    const { width } = this.state;
    const isMobile = width <= 991;
    if (apiCalled === true && isFetching === false) {
      if (error === true) {
        return (
          <div className="pokemon pokemon-404 pokemon-purple row">
            <NoMatch />
          </div>
        );
      }
      if (isMobile) {
        return (
          <div className={`pokemon pokemon-mobile pokemon-${resSpecies.color.name} row`}>
            <div className="col--12 pokemon__profile">
              <NamePokemon name={resPokemon.name} />
              <TypeList types={resPokemon.types} />
              <ImgPokemon id={resPokemon.id} />
            </div>
            <div className="col--12 pokemon__tabs">
              <Tabs>
                <div label="About">
                  <DescPokemon desc={resSpecies.flavor_text_entries} />
                  <AboutPokemon height={resPokemon.height} weight={resPokemon.weight} />
                </div>
                <div label="Stats">
                  <BaseStats stats={resPokemon.stats} />
                </div>
                <div label="Breeding">
                  <GenderRate genderRate={resSpecies.gender_rate} />
                  <EggGroups eggGroups={resSpecies.egg_groups} />
                </div>
              </Tabs>
            </div>
          </div>
        );
      }
      return (
        <div className={`pokemon pokemon-${resSpecies.color.name} row`}>
          <div className="pokemon__sidebar pokemon__sidebar-left col-xl-3 col--4">
            <div className="sidebar__wrapper">
              <GenderRate genderRate={resSpecies.gender_rate} />
              <EggGroups eggGroups={resSpecies.egg_groups} />
            </div>
          </div>
          <div className="pokemon__profile col--4">
            <div className="profile__wrapper">
              <NamePokemon name={resPokemon.name} />
              <ImgPokemon id={resSpecies.id} />
              <TypeList types={resPokemon.types} />
            </div>
          </div>
          <div className="pokemon__sidebar pokemon__sidebar-right col--4">
            <div className="sidebar__wrapper">
              <DescPokemon desc={resSpecies.flavor_text_entries} />
              <AboutPokemon height={resPokemon.height} weight={resPokemon.weight} />
              <BaseStats stats={resPokemon.stats} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="col--12">
        <h1>Loading...</h1>
      </div>
    );
  }
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemon: PropTypes.string,
    }),
  }).isRequired,
};

export default Pokemon;
