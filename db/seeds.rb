
User.destroy_all
Team.destroy_all
Channel.destroy_all
Message.destroy_all

user = User.create!(username: "tension_tamer", password: "password")
team = Team.create!(name: "Demo Team")
channel = Channel.create!(team: team, author: user, name: "Demo Channel")

Message.create!(author: user, channel: channel, body: "Post 1")
Message.create!(author: user, channel: channel, body: "Post 2")
Message.create!(author: user, channel: channel, body: "Post 3")
Message.create!(author: user, channel: channel, body: "Post 4")
Message.create!(author: user, channel: channel, body: "Post 5")
Message.create!(author: user, channel: channel, body: "Post 6")
Message.create!(author: user, channel: channel, body: "Post 7")
Message.create!(author: user, channel: channel, body: "Post 8")
Message.create!(author: user, channel: channel, body: "Post 9")
Message.create!(author: user, channel: channel, body: "Post 10")
