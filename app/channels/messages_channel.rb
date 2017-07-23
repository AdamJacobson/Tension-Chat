class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages_#{params[:channel_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
