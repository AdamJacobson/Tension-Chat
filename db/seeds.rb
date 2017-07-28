require 'faker'

User.destroy_all
Team.destroy_all
Channel.destroy_all
Message.destroy_all
DirectMessage.destroy_all
TeamMembership.destroy_all
ChannelMembership.destroy_all

def generate_content(faker, team, channel_namer)
  users = []

  while users.length < 10
    user = User.new(username: faker.character.gsub(/\W/, '_'), password: "password")
    if user.valid?
      user.save
      users.push(user)
    end
  end

  # p users.map(&:username)

  users.each do |u|
    u.join_team(team)
  end

  10.times do |_|
    name = faker.send channel_namer
    channel = Channel.new(team: team, author: team.users.sample, name: name, description: "Description for channel #{name}")
    if channel.valid?
      channel.save
    end
    # Channel.create!(team: team, author: team.users.sample, name: name, description: "Description for channel #{name}")
  end

  team.channels.each_with_index do |channel, _|
    30.times do |_|
      body = faker.quote
      Message.create!(author: team.users.sample, channel: channel, body: body)
    end
  end
end

hhg = Team.create!(name: "The Hitchhikers Guide")
th = Team.create!(name: "The Hobbit")
hp = Team.create!(name: "Harry Potter")

generate_content(Faker::HitchhikersGuideToTheGalaxy, hhg, :planet)
generate_content(Faker::Hobbit, th, :location)
generate_content(Faker::HarryPotter, hp, :house)

demo_user = User.create!(username: "Tension_Demo", password: "tensiondemo")
demo_user.join_default_teams
