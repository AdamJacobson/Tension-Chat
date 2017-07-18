import React from 'react';

const Chat = ({ currentUser, logout }) => {
  if (currentUser) {
    return(
      <div>
        <h1>Welcome, {currentUser.username}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
};

export default Chat;
