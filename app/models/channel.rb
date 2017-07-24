# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  team_id     :integer          not null
#  author_id   :integer          not null
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :team, :author, :name, presence: true
  validate :user_must_be_in_team

  def user_must_be_in_team
    unless self.author.teams.include? self.team
      errors.add(:team, "must have author as a member")
    end
  end

  belongs_to :team
  belongs_to :author, class_name: :User
end
