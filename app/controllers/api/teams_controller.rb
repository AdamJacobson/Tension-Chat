class Api::TeamsController < ApplicationController

  def index
    @teams = Team.all
    render :index
  end

  def show
    @team = Team.find(params[:id])
    session[:team_id] = @team.id
    render :show
  end

end
