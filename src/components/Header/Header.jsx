import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-wrapper col--6 col--offset-6">
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
        <Navbar />
      </div>
    </header>
  );
}
export default Header;
