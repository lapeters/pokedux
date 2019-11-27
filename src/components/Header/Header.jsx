import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className="row">
      <div className="col--12">
        <div className="row">
          <div className="col--6">
            <Search />
          </div>
          <div className="col--6">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
