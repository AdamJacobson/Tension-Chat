json.array! @dms do |dm|
  json.partial! 'api/direct_messages/direct_message', dm: dm
end
