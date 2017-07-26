class DirectMessage < ApplicationRecord
  validates :body, :recipient, :sender, :team, presence: true
  validate :both_users_are_in_team

  # Validates that both users are member of Team
  def both_users_are_in_team
    unless (recipient.teams.include? self.team) && (sender.teams.include? self.team)
      errors.add(:team, "must have both sender and recipient as members")
    end
  end

  # after_create_commit { DirectMessageBroadcastJob.perform_later self }

  belongs_to :recipient, class_name: :User
  belongs_to :sender, class_name: :User
  belongs_to :team
end
