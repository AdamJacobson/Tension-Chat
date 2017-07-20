json.array! @teams do |team|
  json.partial! 'api/teams/team', team: team
end
