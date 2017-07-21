class TeamMembership < ApplicationRecord
  validates :user, :team, presence: true
  validates_uniqueness_of :user, scope: [:team], message: "cannot be in the same team more than once"

  belongs_to :user
  belongs_to :team
end
