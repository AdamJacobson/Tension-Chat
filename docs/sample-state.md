# Sample State

```js
{
  currentUser: {
    id: 1,
    username: 'Adam'
  },

  team: {
    name: "Demo Team",
    channels: {
      1: {
        id: 1,
        name: 'first_channel'
      },
      2: {
        id: 2,
        name: 'second_channel'
      },
      current_channel: 1
    },
    members: {
      4: {
        id: 4,
        username: 'Alex'
      },
      7: {
        id: 7,
        username: 'Sarah'
      }
    }
  },

  messages: {
    23: {
      author_id: 2,
      date: '01/01/2017 14:14:05',
      body: 'some text',
      channel_id: 1
    },
    24: {
      author_id: 5,
      date: '01/01/2017 14:15:29',
      body: 'some more text',
      channel_id: 1
    },
    25: {
      author_id: 1,
      date: '01/01/2017 14:20:31',
      body: 'some other text',
      channel_id: 1
    },
  },
}
```
