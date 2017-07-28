# Tension Chat

[Tension Chat](https://tension.herokuapp.com) is an instant message application based around Slack. It is full-stack application built from scratch using Rails and Postgresql on the backend and React/Redux on the frontend.

## Features
 - User authentication with BCrypt
 - Message sending and receiving via channels
 - Direct messaging between users
 - Teams

### Message Sending and Receiving
The essence of any chat application is the sending and receiving of messages without needing to refresh the page. With Tension, this is accomplished through the use of Rails ActionCable. An ActionCable stream is created for each channel the user is a member of. Any messages created in this channel will be posted to that stream and any users listening will receive the message.

![chat demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/chat_demo.gif)

### Direct messaging between users
Any users in the same team can send messages to each other privately. Styling will alert the user to a new message should one be sent.

![direct message demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/direct_message_demo.gif)

### Teams
Teams are a container for channels, direct messages and users. A user can be on mutliple teams and switch between them freely. By default, newly created users are placed into the 3 default teams for demonstration purposes. On login, the user will be prompted to select which of their teams to enter.

![teams demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/teams_demo.gif)

## Future Plans
I plan to continue to develop Tension time permitting. Here are some features which I wouldl like to add.

### Full team controls
Users will be able to create their own teams and invite others to join.

### Multi-person direct messaging
A user can initialize a conversation will multiple users concurrently and add new users once started.

### Message editing
A user will be able to modify messages that have already been sent

### Markdown Styling
Message will support limited markdown styling such as bold or italic font

### Customizable user avatars
Users can upload their own avatars or pick from a number of default ones
