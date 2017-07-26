import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeader from './splash_header';

const Splash = () => {
  return (
    <div className="splash-page">

      <SplashHeader />

      <div className="splash-content">
        <div className="splash-text">
          <div>Where things<span className="asterisk">*</span></div>
          <div>get done</div>
        </div>
        <br />
        <div className="splash-tagline">
          <span className="asterisk">*</span>Whatever those things might be, Tension brings all the pieces and people
          you need together so you can focus on the actual work.
        </div>
        <br />
        <Link className="button button-fixed button-confirm" to="/login">Get Started</Link>
      </div>

      <div className="splash-footer">

      </div>

    </div>
  );
};

export default Splash;
