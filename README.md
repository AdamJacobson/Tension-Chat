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

    # messages_channel.rb
    class MessagesChannel < ApplicationCable::Channel
     def subscribed
      stream_from "messages_#{params[:channel_id]}"
     end
    end

### Direct messaging between users
Any users in the same team can send messages to each other privately. Styling will alert the user to a new message should one be sent.

![direct message demo](https://github.com/AdamJacobson/Tension-Chat/blob/docs-images/docs/gifs/direct_message_demo.gif)

### Teams
