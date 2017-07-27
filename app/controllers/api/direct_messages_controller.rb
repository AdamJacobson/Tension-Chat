class Api::DirectMessagesController < ApplicationController

  def create
    recipient = params[:direct_message][:recipient_id]
    if recipient.is_a? String
      params[:direct_message][:recipient_id] = User.find_by(username: recipient.delete('@')).id
    end

    @dm = DirectMessage.new(dm_params)
    @dm.author = current_user

    if @dm.save
      render :sender_copy
    else
      render json: @dm.errors.full_messages, status: 422
    end
  end

  def conversation
    # Handle recipient being sent as @username
    user_id = params[:user_id]
    if user_id.to_i == 0
      user_id = User.find_by(username: user_id.delete('@')).id
    end

    @dms = DirectMessage.where(
      "team_id = ? AND
      ((author_id = ? AND recipient_id = ?)
      OR
      (recipient_id = ? AND author_id = ?))",
      params[:team_id], current_user.id, user_id, current_user.id, user_id)

    render :conversation
  end

  def active_conversations
    me = current_user
    received = DirectMessage.where("recipient_id = ?",  me.id).pluck(:author_id).uniq;
    sent = DirectMessage.where("author_id = ?",  me.id).pluck(:recipient_id).uniq
    all = received.concat(sent).uniq

    conversations = User.find(all).pluck(:username).map do |username|
      '@' + username
    end

    render json: conversations
  end

  private

  def dm_params
    params.require(:direct_message).permit(:body, :team_id, :recipient_id)
  end

end
