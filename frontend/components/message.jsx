import React from 'react';

const formatTime = (date) => {
  const d = new Date(date);
  let hours = d.getHours();
  let minutes = d.getMinutes();

  let period = hours < 12 ? 'AM' : 'PM';
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${hours}`;
  }

  return `${hours}:${minutes} ${period}`;
};

const Message = ({ message, users }) => {
  return (
    <li className="message">
      <div className="side-by-side">

        <div className="avatar">
          <i className="fa fa-picture-o" aria-hidden="true"></i>
        </div>

        <div className="message-content">

          <div className="message-meta">
            <strong>{users[message.author_id].username}</strong> <time>{formatTime(message.created_at)}</time>
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
