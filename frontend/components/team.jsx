import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import ChannelsContainer from './channels_container';
import DirectMessagesContainer from './direct_messages_container';
import { subscribeToDirectMessages } from '../connections/direct_messages_connection';
import { subscribeToUsers } from '../connections/users_connection';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestConversations(this.props.currentUser.id, this.props.teamId);
    subscribeToDirectMessages(this.props.receiveDirectMessage, this.props.teamId, this.props.currentUser.id);
    subscribeToUsers(this.props.receiveSingleUser, this.props.teamId);

    // If no state data for team
    if (!this.props.team.id) {
      this.props.requestSingleTeam(this.props.teamId);
    }
  }

  showDropdown() {
    $('#team-dropdown').addClass('show');
  }

  hideDropdown() {
    $('#team-dropdown').removeClass('show');
  }

  render() {
    return(
      <div className="team-container">
        <div className="team-content">

          <div className="clickable" onClick={this.showDropdown}>
            <div className="side-by-side">
              <h3 className="team-name">{this.props.team.name}</h3>
              &nbsp;
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            <div className="user-status">
              <i className="fa fa-circle available" aria-hidden="true"></i>
              <span className="username">{this.props.currentUser.username}</span>
            </div>
          </div>

          <div id="team-dropdown" className="dropdown">

            <div className="dropdown-content">
              <div className="dropdown-section">
                <div className="side-by-side">
                  <img className="avatar" src="http://i.imgur.com/X3QLIPz.png"/>
                  <span className="username">{this.props.currentUser.username}</span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="dropdown-section">
                <div className="dropdown-item" onClick={this.props.logout}>Logout</div>
                <div className="dropdown-item"><Link className="fill" to="/teams">Change Team</Link></div>
              </div>

              <div className="divider"></div>

              <div className="dropdown-section">
                <div className="dropdown-item"><a className="fill" target="_blank" href="https://github.com/AdamJacobson/Tension-Chat">About Tension</a></div>
              </div>

            </div>

            <div className="dropdown-mask" onClick={this.hideDropdown}></div>
          </div>

          <ChannelsContainer />

          <DirectMessagesContainer />
        </div>
      </div>
    );
  }
}

export default Team;
