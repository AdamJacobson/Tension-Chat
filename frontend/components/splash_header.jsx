import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = ({ light }) => {
  let navClass = "header-dark";
  if (light) {
    navClass = "header-light";
  }

  return (
    <nav className={`splash-header ${navClass}`}>
      <Link className="header-logo" to="/">Tension</Link>
      <div className="header-options">
        <Link className="header-option" to="/login">Log In</Link>
        <Link className="header-option" to="/signup">Sign Up</Link>
        <a className="header-option" target="_blank" href="https://github.com/AdamJacobson/Tension-Chat">About</a>
      </div>
    </nav>
  );
};

export default SplashHeader;
