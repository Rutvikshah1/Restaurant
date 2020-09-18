import React, { Fragment } from 'react';

import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  function navbarToggle() {
    const element = document.querySelector('nav');
    element.classList.toggle('navtog');
  }
  return (
    <Fragment>
      <div className="navbar-icon" id="nav-icon" onClick={navbarToggle}>
        &nbsp;
      </div>

      <nav className="navbar" id="navbar">
        <ul className="navbar__links" onClick={navbarToggle}>
          <li className="navbar__links--link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__links--link">
            <a href="/">Menu</a>
          </li>
          <li className="navbar__links--link">
            <a href="/">Book A Table</a>
          </li>
          <li className="navbar__links--link">
            <a href="/">News</a>
          </li>
          <li className="navbar__links--link">
            <Link to="/contact">Contact</Link>
          </li>

          <hr className="horizontal-line" />

          <li className="navbar__links--link">
            <Link to="/login">LOGIN</Link>
          </li>

          <li className="navbar__links--link">
            <Link to="/signup">SIGNUP</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
