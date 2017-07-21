
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
  [0, 1, 2].each do |num|
    name = "Team #{team_i}, Channel #{num}"
    channels.push(Channel.create!(team: team, author: users.sample, name: name))
  end

  channels.each_with_index do |channel, ch_i|
    10.times do |m_i|
      body = "Team #{team_i}, Channel #{ch_i}, Message #{m_i}"
      Message.create!(author: users.sample, channel: channel, body: body)
    end
  end
end
