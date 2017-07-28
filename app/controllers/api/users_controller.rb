class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      @user.join_default_teams
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = Team.find(params[:team_id]).users
    render :index
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
