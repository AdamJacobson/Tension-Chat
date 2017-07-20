
User.destroy_all
Team.destroy_all
Channel.destroy_all
Message.destroy_all

User.create!(username: "tension_tamer", password: "password")
User.create!(username: "adam", password: "password")
User.create!(username: "anne", password: "password")

Team.create!(name: "Demo Team 0")
Team.create!(name: "Demo Team 1")
Team.create!(name: "Demo Team 2")

users = User.all

Team.all.each_with_index do |team, team_i|
  channels = []
  [1, 2, 3].each do |num|
    channels.push(Channel.create!(team: team, author: users.sample, name: "Team #{team_i} Channel #{num}"))
  end

  channels.each_with_index do |channel, ch_i|
    10.times do |i|
      Message.create!(author: users.sample, channel: channel, body: "Message ##{i} for channel #{ch_i}")
    end
  end
end
