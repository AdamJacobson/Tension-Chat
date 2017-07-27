import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, HashRouter, Link, NavLink, withRouter, Redirect } from 'react-router-dom';

import { subscribeToDirectMessages } from '../connections/direct_messages_connection';

class DirectMessages extends React.Component {
  render() {
    return(
      <div className="channel-group">
        <h4 className="channel-type-header">
          <span className="clickable">DIRECT MESSAGES</span>
          <i className="fa fa-plus-circle fa-lg clickable" aria-hidden="true"></i>
        </h4>

        <ul className="channel-list">
          {this.props.users.map((user, i) => {
            let classes = "channel-item";
            if (0 === user.id) {
              classes += " channel-selected";
            }
            return(
              <li className={classes} key={i}>
                <Link className="channel-link"
                      to={`/teams/${this.props.team.id}/messages/@${user.username}`}>
                  @ {user.username}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

// onClick={() => this.props.updateCurrentChannel(user.id)}

export default DirectMessages;
