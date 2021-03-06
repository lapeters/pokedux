import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/images/missingno.png';

function NoMatch() {
  return (
    <div className="col--lg-6 col--11 pokemon__profile">
      <h1>404</h1>
      <img src={image} alt="" />
      <h2>
        Oops! Looks like you&apos;re lost.
        Enter another Pokemon in the search above or navigate
        {' '}
        <Link to="/">Home</Link>
        !
      </h2>
    </div>
  );
}
export default NoMatch;
