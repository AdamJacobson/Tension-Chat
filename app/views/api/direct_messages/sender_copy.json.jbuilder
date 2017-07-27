json.extract! @dm, :id, :body, :author_id, :recipient_id, :team_id, :created_at
json.username '@' + @dm.recipient.username
