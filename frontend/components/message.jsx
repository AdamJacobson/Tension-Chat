import React from 'react';

const Message = ({ message }) => {
  return (
    <li className="message">
      <div className="side-by-side">

        <div className="avatar">
          <i className="fa fa-picture-o" aria-hidden="true"></i>
        </div>

        <div className="message-content">

          <div className="message-meta">
            <strong>user #{message.author_id}</strong> <time>{message.created_at}</time>
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
