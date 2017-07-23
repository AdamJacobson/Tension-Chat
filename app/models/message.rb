# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  channel_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :channel, :author, presence: true
  # validates :channel, in: { self.channels }

  after_create_commit { MessageBroadcastJob.perform_later self }

  belongs_to :channel
  belongs_to :author, class_name: :User
end
