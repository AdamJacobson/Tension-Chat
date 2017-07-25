import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, Link, NavLink, withRouter, Redirect } from 'react-router-dom';

import ChannelsContainer from './channels_container';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // If no state data for team
    if (!this.props.team.id) {
      this.props.requestSingleTeam(this.props.teamId);
    }
  }

  render() {
    return(
      <div className="team-container">
        <div className="team-content">

          <h3 className="team-name">{this.props.team.name}</h3>

          <div className="user-status">
            <i className="fa fa-circle available" aria-hidden="true"></i>
            <span className="username">{this.props.currentUser.username}</span>
          </div>

          <button onClick={this.props.logout}>Logout</button>

          <ChannelsContainer />
        </div>
      </div>
    );
  }
}

export default Team;
