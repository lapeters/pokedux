import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { name } = props;
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <div className="col--12">
      <h1>{capitalize(name)}</h1>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
