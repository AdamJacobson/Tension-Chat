class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.where(team_id: params[:team_id])
    render :index
  end

  def show
    @channel = Channel.find(params[:id])
  end
end
