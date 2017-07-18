import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-page">

      <div className="splash-content">
        <div className="splash-text">
          <div>Where work<span className="asterisk">*</span></div>
          <div>happens</div>
        </div>
        <div className="splash-tagline">
          <span className="asterisk">*</span>Whatever work means for you, Tension brings all the pieces and people
          you need together so you can actually get things done.
        </div>

        <Link className="button" to="/login">Get Started</Link>
      </div>

    </div>
  );
};

export default Splash;
