class DirectMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(dm)
    ActionCable.server.broadcast("direct_messages_#{dm.team_id}_#{dm.recipient_id}", render_message(dm))
  end

  private

  def render_message(dm)
    ApplicationController.render(partial: 'api/direct_messages/direct_message', locals: { dm: dm } )
  end
end
