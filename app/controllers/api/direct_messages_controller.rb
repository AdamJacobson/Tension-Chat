class Api::DirectMessagesController < ApplicationController

  def create
    @dm = DirectMessage.new(dm_params)
    @dm.sender = current_user

    unless @dm.save
      render json: @dm.errors.full_messages, status: 422
    end
  end

  def conversation
    @dms = DirectMessage.where(
      "(sender_id = ? AND recipient_id = ?)
      OR
      (recipient_id = ? AND sender_id = ?)",
      current_user.id, params[:user_id], current_user.id, params[:user_id])

    render :conversation
  end

  private

  def dm_params
    params.require(:direct_message).permit(:body, :team_id, :recipient_id)
  end

end
