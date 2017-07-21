class Api::TeamsController < ApplicationController

  def index
    # @teams = Team.all
    @teams = current_user.teams
    render :index
  end

  def show
    @team = Team.find(params[:id])
    session[:team_id] = @team.id
    render :show
  end

end
