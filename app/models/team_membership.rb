class TeamMembership < ApplicationRecord
  validates :user, :team, presence: true

  belongs_to :user
  belongs_to :team
end
