
User.destroy_all
Team.destroy_all
Channel.destroy_all
Message.destroy_all

a_team = Team.create!(name: "The 'A' Team")
b_team = Team.create!(name: "The 'B' Team")
c_team = Team.create!(name: "The 'C' Team")

demo_user = User.create!(username: "tension_tamer", password: "password")


a_users = [demo_user]

a_users.push(User.create!(username: "Adam", password: "password"))
a_users.push(User.create!(username: "Alaric", password: "password"))
a_users.push(User.create!(username: "Alphonse", password: "password"))

# a_users.each do |user|
#   user.join_team(a_team)
# end


b_users = [demo_user]

b_users.push(User.create!(username: "Bayonetta", password: "password"))
b_users.push(User.create!(username: "Boris_Badenov", password: "password"))
b_users.push(User.create!(username: "Brick", password: "password"))

# b_users.each do |user|
#   user.join_team(b_team)
# end


c_users = [demo_user]

c_users.push(User.create!(username: "Childermass", password: "password"))
c_users.push(User.create!(username: "Corax", password: "password"))
c_users.push(User.create!(username: "Chris_Redfield", password: "password"))

# c_users.each do |user|
#   user.join_team(c_team)
# end


Team.all.each_with_index do |team, team_i|
  20.times do |num|
    name = "Team #{team_i}, Channel #{num}"
    Channel.create!(team: team, author: team.users.sample, name: name, description: "Description for channel #{num}")
  end

  team.channels.each_with_index do |channel, ch_i|
    30.times do |m_i|
      body = "Team #{team_i}, Channel #{ch_i}, Message #{m_i}"
      Message.create!(author: team.users.sample, channel: channel, body: body )
    end
  end
end

secret_team = Team.create!(name: "The Super Secret Team")
