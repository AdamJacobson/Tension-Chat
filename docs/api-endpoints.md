# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Messages
- `GET /api/messages/:channelId`
  - Get last 100 or so messages for channel
- `POST /api/messages/`
  - Post message

### Channels
- `GET /api/channels`
  - Get all channels overview data for current user
- `GET /api/channels/:id`
  - Get data for one channel
