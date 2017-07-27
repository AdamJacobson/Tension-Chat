class DirectMessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "direct_messages_#{params[:team_id]}_#{params[:recipient_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
