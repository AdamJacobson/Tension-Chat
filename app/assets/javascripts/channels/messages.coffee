# App.messages = App.cable.subscriptions.create "MessagesChannel",
#   connected: ->
#     # Called when the subscription is ready for use on the server
#
#   disconnected: ->
#     # Called when the subscription has been terminated by the server
#
#   received: (data) ->
#     console.log("== incoming ==")
#     console.log(data)
