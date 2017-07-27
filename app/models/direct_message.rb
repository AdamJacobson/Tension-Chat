class DirectMessage < ApplicationRecord
  validates :body, :recipient, :author, :team, presence: true
  validate :both_users_are_in_team

  # Validates that both users are member of Team
  def both_users_are_in_team
    unless (recipient.teams.include? self.team) && (author.teams.include? self.team)
      errors.add(:team, "must have both author and recipient as members")
    end
  end

  # after_create_commit { DirectMessageBroadcastJob.perform_later self }

  belongs_to :recipient, class_name: :User
  belongs_to :author, class_name: :User
  belongs_to :team
end
