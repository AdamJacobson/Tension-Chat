import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, HashRouter, Link, NavLink, withRouter, Redirect } from 'react-router-dom';

class Channels extends React.Component {
  componentWillMount() {
    this.props.requestChannels(this.props.team.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.channels.length === 0) {
      newProps.requestChannels(newProps.team.id);
    }
  }

  render() {
    return(
      <div className="channel-group">
        <h4 className="channel-type-header">CHANNELS</h4>
        <ul className="channel-list">
          {this.props.channels.map((ch, i) => (
            <li className="channel-item">
              <NavLink className="channel-link" key={i} to={`/teams/${this.props.team.id}/messages/${ch.id}`}>
                # {ch.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Channels;
