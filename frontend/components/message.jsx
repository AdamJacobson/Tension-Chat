import React from 'react';

const Message = ({ message }) => {
  return (
    <li className="message">{message.body} by {message.author_id}</li>
  );
};

export default Message;
