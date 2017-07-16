# Tension Chat

~~[Heroku link][heroku]~~ **Note:** Not yet available

[Trello link][trello]

[heroku]: http://www.herokuapp.com/
[trello]: https://trello.com/b/r6JhyWE7/tension-chat

## Minimum Viable Product

Tension is a web application which aims to copy the major features of Slack.
It is powered by React with Redux and has a Rails backend.

The following criteria are required for the project to be considered complete.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Live Chat (Sending/Receiving Messages)
- [ ] Channels
- [ ] Direct Messages
- [ ] Teams/Group Chat
- [ ] A Production README [sample](docs/production_readme.md)

## Bonus Features

The following features are stretch goals should the basic features be completed in time.

- [ ] Search Messages
- [ ] Notifications
- [ ] Markdown Styling
- [ ] Limited message retrieval and scrollback

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

There are 11 total days of work available for the project

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Message sending (without sockets) (1 day)

**Objective:** Should be able to post messages and see posted messages

### Phase 3: Sockets (1 day)

**Objective:** Notes should appear automatically once posted. Page refresh not required.

### Phase 4: Channels (2 days)

**Objective:** Messages are posted to specific channels. Channels

### Phase 5: Direct Messages (1 day)

**Objective:** Same as a channel but only between 2 people

### Phase 6: Teams/Group Chat (2 days)

**Objective:** Teams are invite only groups which contain people and channels
