import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      redirectToReferrer: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value, redirectToReferrer } = this.state;
    this.setState({
      redirectToReferrer: true,
    });
    event.preventDefault();
  }

  render() {
    const { value, redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to={`/${value.toLowerCase()}`} />;
    }
    return (
      <div className="search col--6">
        <div className="search__top">
          <h1>Pokédux</h1>
          <p>A Pokedex app made using React.</p>
        </div>
        <div className="search__middle">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="pokemonSearch">
              Search for a Pokemon:
              <div className="input__group">
                <input id="pokemonSearch" type="text" value={value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
              </div>
            </label>
          </form>
        </div>
        <div className="search__bottom" />
      </div>
    );
  }
}

export default Search;
