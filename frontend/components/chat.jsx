import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;

    this.logout = props.logout.bind(this);
  }

  render() {
    if (this.currentUser) {
      return(
        <div>
          <h1>Welcome, {this.currentUser.username}</h1>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }
  }
}

export default Chat;
