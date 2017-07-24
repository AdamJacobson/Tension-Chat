class ChannelBroadcastJob < ApplicationJob
  queue_as :default

  def perform(channel)
    ActionCable.server.broadcast("channels_#{channel.team_id}", render_channel(channel))
  end

  private

  def render_channel(channel)
    ApplicationController.render(partial: 'api/channels/channel', locals: { channel: channel })
  end
end
