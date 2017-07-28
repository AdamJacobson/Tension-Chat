class UserBroadcastJob < ApplicationJob
  queue_as :default

  def perform(user, team)
    ActionCable.server.broadcast("users_#{team.id}", render_user(user))
  end

  private

  def render_user(user)
    ApplicationController.render(partial: 'api/users/user', locals: { user: user })
  end
end
