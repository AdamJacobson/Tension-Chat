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
        <Link className="header-option" to="/">Product</Link>
        <Link className="header-option" to="/">Pricing</Link>
        <Link className="header-option" to="/">Support</Link>
      </div>
    </nav>
  );
};

export default SplashHeader;
