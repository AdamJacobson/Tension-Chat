import React from 'react';
import { Route } from 'react-router-dom';

import MessagesContainer from './messages_container';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;

    this.logout = props.logout.bind(this);
  }

  render() {
    if (this.currentUser) {
      return(
        <div className="chat-container">

          <div className="side-by-side">
            <div className="team-container">
              Team Name Here
            </div>

            <div className="chat-right-container">
              <div className="header-container">
                <h1>Welcome, {this.currentUser.username}</h1>
                <button onClick={this.logout}>Logout</button>
              </div>

              <div className="side-by-side">
                <Route path="/messages/:channelId?" component={MessagesContainer} />

                <div className="info-container">
                  Info Here
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Chat;
