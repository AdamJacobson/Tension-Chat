class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    # ActionCable.server.broadcast 'messages', message
    ActionCable.server.broadcast('messages', render_message(message))
  end

  private

  def render_message(message)
    ApplicationController.render(partial: 'api/messages/message', locals: { message: message } )
  end
end
