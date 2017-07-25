class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.where(team_id: params[:team_id])
    render :index
  end

  def joined
    @channels = current_user.channels.where(team_id: params[:team_id])
    render :index
  end

  def unjoined
    @channels = Channel.where(team_id: params[:team_id]) - current_user.channels.where(team_id: params[:team_id])
    render :index
  end

  def membership
    channel = Channel.find(params[:channel_id])

    if (params[:membership] == "true")
      current_user.join_channel(channel)
      render json: "Joined channel #{channel.id}"
    else
      current_user.leave_channel(channel)
      render json: "Left channel #{channel.id}"
    end
  end

  def show
    @channel = Channel.find(params[:id])
  end

  # Check team ID membership
  def create
    channel = Channel.new(channel_params)
    channel.author = current_user
    unless channel.save
      render json: channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:team_id, :name, :description)
  end
end
