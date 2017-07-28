# Tension Chat

[Tension Chat](https://tension.herokuapp.com) is an instant message application based around Slack. It is full-stack application built from scratch using Rails and Postgresql on the backend and React/Redux on the frontend.

## Technologies
Tension uses Rails 5.0 on the backend. Vanilla routing is used but all responses are rendered as JSON except for the front page as this was intended to be a single page application. The Rails ActionCable was used to send information without the user requesting it explicitly.

React is a front-end framework developed by Facebook. It allows for efficiently responding to changes in store state. The state mangament library/pattern Redux was also used to simplify the act of altering state.

A small amount of jQuery was used to make AJAX requests more cleanly.

## Features
 - User authentication with BCrypt
 - Message sending and receiving via channels
 - Direct messaging between users
 - Teams

### Message Sending and Receiving
The essence of any chat application is the sending and receiving of messages without needing to refresh the page. With Tension, this is accomplished through the use of Rails ActionCable. An ActionCable stream is created for each channel the user is a member of. Any messages created in this channel will be posted to that stream and any users listening will receive the message.

![chat demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/chat_demo.gif)

The code for setting up action cable was fairly simple but required some tweaking. Rails will generate some of this code on request but the listeners which are generated for the frontend will be initialized immediately on the application loading. I had to rewrite them into a modular format to allow for more control, as the channels to be listened to would change depending on the user action. I also built in protections to prevent duplicate channels from being created.

``` javascript
import * as MessageActions from '../actions/message_actions';

const channelName = "MessagesChannel";

export const unsubscribeFromMessages = () => {
  window.App.cable.subscriptions.subscriptions.forEach((sub) => {
    if (JSON.parse(sub.identifier).channel === channelName) {
      window.App.cable.subscriptions.forget(sub);
    }
  });
};

export const subscribeToMessages = (action, channelId) => {
  const alreadySubscribed = window.App.cable.subscriptions.subscriptions.some((sub) => {
    return JSON.parse(sub.identifier).channel_id === channelId;
  });

  if (!alreadySubscribed) {
    window.App.cable.subscriptions.create(
      {
        channel: channelName,
        channel_id: channelId
      },
      {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          action(JSON.parse(data));
        }
      }
    );
  }
};
 ```

### Direct messaging between users
Any users in the same team can send messages to each other privately. Styling will alert the user to a new message should one be sent.

![direct message demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/direct_message_demo.gif)

The unread message count is achieved by incrementing a counter when receiving message related to a specific user. The counter is cleared once that conversation is selected. This functionality can also be extended to regular channel messages.
``` javascript
# message_reducer.js
switch (action.type) {
  
  ...
  
  case Actions.RECEIVE_DIRECT_MESSAGE:
  let previous;
  if (state[action.message.username] && state[action.message.username].entities) {
    previous = state[action.message.username];
  } else {
    previous = { entities: [], unread: 0 };
  }
  
  newMessages = {
    [action.message.username]: {
      entities: previous.entities.concat(markUnread(action.message)),
      unread: previous.unread + 1
    }
  };
  return Object.assign({}, state, newMessages);
  
  case Actions.CLEAR_UNREAD_FLAG:
  newMessages = {
    [action.channelId]: {
      entities: state[action.channelId].entities,
      unread: 0
    }
  };
  return Object.assign({}, state, newMessages);
  
  ...
}
```

### Teams
Teams are a container for channels, direct messages and users. A user can be on mutliple teams and switch between them freely. By default, newly created users are placed into the 3 default teams for demonstration purposes. On login, the user will be prompted to select which of their teams to enter.

![teams demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/teams_demo.gif)

## Future Plans
I plan to continue to develop Tension time permitting. Here are some features which I would like to add.

### Full team controls
Users will be able to create their own teams and invite others to join.

### Multi-person direct messaging
A user can initialize a conversation with multiple users concurrently and add new users once started.

### Message editing
A user will be able to modify messages that have already been sent

### Markdown Styling
Messages will support limited markdown styling such as bold or italic font

### Customizable user avatars
Users can upload their own avatars or pick from a number of default ones
