import React from 'react';

const formatTime = (date) => {
  const d = new Date(date);
  let hours = d.getHours();
  let minutes = d.getMinutes();

  let period;
  if (hours < 12) {
    period = 'AM';
  } else {
    hours -= 12;
    period = 'PM';
  }

  if (hours === 0) hours = 12;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes} ${period}`;
};

const Message = ({ message, users }) => {
  const newClass = (message.read ? "" : " message-new");

  return (
    <li className={"message" + newClass}>
      <div className="side-by-side">

        <img className="avatar" src="http://i.imgur.com/X3QLIPz.png"/>

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
