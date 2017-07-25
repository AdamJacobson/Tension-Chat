import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import MessagesContainer from './messages_container';
import TeamContainer from './team_container';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;
    this.props.requestUsers(this.props.match.params.teamId);
    this.logout = props.logout.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.teamId !== newProps.match.params.teamId) {
      this.props.requestUsers(newProps.match.params.teamId);
    }

    if (this.props.currentChannel !== newProps.currentChannel) {
      newProps.history.push(`/teams/${newProps.match.params.teamId}/messages/${newProps.currentChannel}`);
    }
  }

  render() {
    const teamId = this.props.match.params.teamId;

    if (this.currentUser) {
      return(
        <div className="chat-container">

          <div className="side-by-side">
            <TeamContainer teamId={teamId} />

            <div className="chat-right-container">
              <div className="header-container">
                <h1>Welcome, {this.currentUser.username}</h1>
                <button onClick={this.logout}>Logout</button>
              </div>

              <div className="side-by-side">
                <Route path="/teams/:teamId/messages/:channelId?" component={MessagesContainer}/>

                <Route path="/teams/:teamId/messages/:channelId?/details" render={() => (
                  <div className="info-container">
                    Info Here
                  </div>
                  )}
                />

              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Chat);
