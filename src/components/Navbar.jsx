import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="row">
        <div className="col--6 col--offset-6">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/pokemon">Pokemon</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
