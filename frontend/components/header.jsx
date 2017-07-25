import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import MessagesContainer from './messages_container';
import TeamContainer from './team_container';

class Header extends React.Component {
  render() {
    return(
      <div className="header-container">
        <div className="header-content">
          <h3>#{this.props.currentChannel}</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
