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

  belongs_to :team
  belongs_to :author, class_name: :User
end
