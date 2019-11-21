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
      <div className="col--6">
        <h1>Home</h1>
        <p>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pokemonSearch">
            Search for a Pokemon:
            <input id="pokemonSearch" type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;
