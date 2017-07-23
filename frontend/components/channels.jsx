import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import { subscribeToMessages } from '../connections/messages_connection';

class Channels extends React.Component {
  componentWillMount() {
    this.props.requestChannels(this.props.team.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.channels.entities.length === 0) {
      newProps.requestChannels(newProps.team.id);
    } else {
      newProps.channels.entities.forEach((channel) => {
        subscribeToMessages(this.props.receiveSingleMessage, channel.id);
      });
    }
  }

  updateCurrentChannel(id) {
    this.props.updateCurrentChannel(id);
  }

  render() {
    return(
      <div className="channel-group">
        <h4 className="channel-type-header">CHANNELS</h4>
        <ul className="channel-list">
          {this.props.channels.entities.map((ch, i) => {
            let classes = "channel-link";
            if (this.props.channels.currentChannel === ch.id) {
              classes += " active";
            }
            return(
              <li className="channel-item" key={i}>
                <Link onClick={() => this.updateCurrentChannel(ch.id)}
                      className={classes}
                      to={`/teams/${this.props.team.id}/messages/${ch.id}`}>
                  # {ch.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Channels;
