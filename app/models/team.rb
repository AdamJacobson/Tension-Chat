# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :channels
  has_many :team_memberships
  has_many :users, through: :team_memberships
end
