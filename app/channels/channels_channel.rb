class ChannelsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channels_#{params[:team_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
