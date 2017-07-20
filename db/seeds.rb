
User.destroy_all
Team.destroy_all
Channel.destroy_all
Message.destroy_all

user = User.create!(username: "tension_tamer", password: "password")
team = Team.create!(name: "Demo Team")

channel1 = Channel.create!(team: team, author: user, name: "Demo Channel 1")
channel2 = Channel.create!(team: team, author: user, name: "Demo Channel 2")

Message.create!(author: user, channel: channel1, body: "Post 1 - 1")
Message.create!(author: user, channel: channel1, body: "Post 1 - 2")
Message.create!(author: user, channel: channel1, body: "Post 1 - 3")
Message.create!(author: user, channel: channel1, body: "Post 1 - 4")
Message.create!(author: user, channel: channel1, body: "Post 1 - 5")
Message.create!(author: user, channel: channel1, body: "Post 1 - 6")
Message.create!(author: user, channel: channel1, body: "Post 1 - 7")
Message.create!(author: user, channel: channel1, body: "Post 1 - 8")
Message.create!(author: user, channel: channel1, body: "Post 1 - 9")
Message.create!(author: user, channel: channel1, body: "Post 1 - 10")

Message.create!(author: user, channel: channel2, body: "Post 1 - 1")
Message.create!(author: user, channel: channel2, body: "Post 1 - 2")
Message.create!(author: user, channel: channel2, body: "Post 1 - 3")
Message.create!(author: user, channel: channel2, body: "Post 1 - 4")
Message.create!(author: user, channel: channel2, body: "Post 1 - 5")
Message.create!(author: user, channel: channel2, body: "Post 1 - 6")
Message.create!(author: user, channel: channel2, body: "Post 1 - 7")
Message.create!(author: user, channel: channel2, body: "Post 1 - 8")
Message.create!(author: user, channel: channel2, body: "Post 1 - 9")
Message.create!(author: user, channel: channel2, body: "Post 1 - 10")
