import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let { value } = this.state;
    const { history } = this.props;
    value = value.replace(/\./g, '').replace(/\s+/g, '-').toLowerCase();
    history.push(`/${value}`);
    event.preventDefault();
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { match, location, history } = this.props;
    return (
      <form className="search__form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <input id="pokemonSearch" type="text" value={value} onChange={this.handleChange} />
          <button type="submit" aria-label="Submit"><FontAwesomeIcon icon="search" /></button>
        </div>
      </form>
    );
  }
}
Search.propTypes = {
  match: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Search);
