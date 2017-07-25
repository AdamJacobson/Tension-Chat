class ChannelMembership < ApplicationRecord
  validates :user, :channel, presence: true
  validates_uniqueness_of :user, scope: [:channel], message: "cannot be in the same channel more than once"

  belongs_to :user
  belongs_to :channel
end
