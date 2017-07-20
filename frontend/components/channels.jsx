import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, HashRouter, Link, NavLink, withRouter, Redirect } from 'react-router-dom';

class Channels extends React.Component {
  componentWillMount() {
    this.props.requestChannels(this.props.team.id);
  }

  componentWillReceiveProps(newProps) {
    console.log("Channels WRP");
    if (newProps.channels.length === 0) {
      newProps.requestChannels(newProps.team.id);
    }
  }

  render() {
    return(
      <div className="channel-group">
        <h4 className="channel-type-header">CHANNELS</h4>
        <ul>
          {this.props.channels.map((ch, i) => <li key={i}># {ch.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Channels;
