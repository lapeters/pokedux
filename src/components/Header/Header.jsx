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
    <header className="container--fluid">
      <div className="row">
        <div className="header__search col--7">
          <Search />
        </div>
        <div className="header__nav col--5">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
export default Header;
