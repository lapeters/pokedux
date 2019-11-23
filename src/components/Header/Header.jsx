import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-wrapper row">
      <ul className="col--6 col--offset-6">
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
        <Navbar />
      </div>
    </header>
  );
}
export default Header;
