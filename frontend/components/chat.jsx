import React from 'react';

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

          <div className="team-container">
            Team Name Here
          </div>

          <div className="header-container">
            <h1>Welcome, {this.currentUser.username}</h1>
            <button onClick={this.logout}>Logout</button>
          </div>

          <MessagesContainer />

          <div className="info-container">
            Info Here
          </div>

        </div>
      );
    }
  }
}

export default Chat;
