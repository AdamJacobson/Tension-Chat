import React from 'react';

const Message = ({ message }) => {
  return (
    <li className="message">
      <div className="side-by-side">
        <i className="fa fa-picture-o" aria-hidden="true"></i>
        <div className="message-content">
          <div className="message-meta">
            <strong>username</strong> <time>{message.created_at}</time>
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
