class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    # Dont forget to build in protections for channel permission
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def index
    @messages = Message.where(channel_id: params[:channel_id]).last(20)
    render :index
  end

  private

  def message_params
    params.require(:message).permit(:channel_id, :author_id, :body)
  end
end
