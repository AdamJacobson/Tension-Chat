# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
avatar          | string    |
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references channels), indexed

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references teams), indexed
author_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | string    |

## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## channel_memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
channel_id  | integer   | not null, foreign key (references channels), indexed, unique [user_id]
user_id     | integer   | not null, foreign key (references users), indexed

## team_memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references teams), indexed, unique [user_id]
user_id     | integer   | not null, foreign key (references users), indexed
