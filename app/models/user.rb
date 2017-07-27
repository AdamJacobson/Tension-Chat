# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  after_create :join_default_teams

  has_many :team_memberships
  has_many :teams, through: :team_memberships

  has_many :channel_memberships
  has_many :channels, through: :channel_memberships

  has_many :received_direct_messages

  has_many :received_direct_messages,
    foreign_key: :recipient_id,
    class_name: :DirectMessage

  has_many :sent_direct_messages,
    foreign_key: :author_id,
    class_name: :DirectMessage

  attr_reader :password

  def join_channel(channel)
    ChannelMembership.create!(user: self, channel: channel)
  end

  def leave_channel(channel)
    ChannelMembership.where(user: self, channel: channel).destroy_all
  end

  def join_team(team)
    TeamMembership.create!(user: self, team: team)
  end

  def join_default_teams
    teams = [Team.first, Team.second, Team.third]
    teams.each do |team|
      self.join_team(team)
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end
end
