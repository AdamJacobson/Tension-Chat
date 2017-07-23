class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def speak(data)
  #   ActionCable.server.broadcast('messages', JSON.parse(render_message(data['message'])))
  # end

  private

  # def render_message(message)
  #   ApplicationController.render(partial: 'api/messages/message', message: message )
  # end
end
