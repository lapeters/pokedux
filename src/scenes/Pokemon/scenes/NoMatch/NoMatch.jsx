import React, { Component } from 'react';
import image from '../../../../assets/missingno.png';

function NoMatch() {
  return (
    <div className="col--lg-6 col--11 pokemon__profile">
      <h1>404</h1>
      <img src={image} alt="" />
      <h2>
        Oops! Looks like you&apos;re lost.
        Enter a pokemon in the search above or navigate to another page!
      </h2>
    </div>
  );
}
export default NoMatch;
