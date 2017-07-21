import React from 'react';

const Message = ({ message, users }) => {
  return (
    <li className="message">
      <div className="side-by-side">

        <div className="avatar">
          <i className="fa fa-picture-o" aria-hidden="true"></i>
        </div>

        <div className="message-content">

          <div className="message-meta">
            <strong>{users[message.author_id].username}</strong> <time>{message.created_at}</time>
          </div>

          <div className="message-body">
            {message.body}
          </div>

        </div>
      </div>
    </li>
  );
};

export default Message;
