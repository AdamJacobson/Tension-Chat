import React from 'react';

const Message = ({ message }) => {
  return (
    <li>{message.body} by {message.author_id}</li>
  );
};

export default Message;
