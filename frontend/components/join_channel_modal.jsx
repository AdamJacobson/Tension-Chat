import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { fetchUnjoinedChannelsForTeam } from '../util/channel_api_util';

class JoinChannelModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { channels: null };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    fetchUnjoinedChannelsForTeam(this.props.match.params.teamId).then((response) => {
      this.setState({ channels: response });
    });
  }

  handleSubmit(channelId) {
    this.props.joinChannel(channelId);
    this.props.closeAction();
  }

  render() {
    let content;
    if (!this.state.channels) {
      content = (
        <div className="loader">
          <div className="loader-text">Loading</div>
          <div className="spinner"></div>
        </div>
      );
    } else if (this.state.channels.length === 0) {
      content = (<h3>There are currently no channels to join.</h3>);
    } else {
      content = (
        <div>
          <h3>Browse all {this.state.channels.length} channels</h3>

          <div className="channel-options">
            {this.state.channels.map((channel, i) => {
              return (
                <div key={i} className="channel-option" onClick={() => this.handleSubmit(channel.id)}>
                  <div>{channel.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return(
      <Modal id="joinModal" isOpen={this.props.isOpen} contentLabel="Modal">
        <div className="modal-content">
          {content}

          <button onClick={this.props.closeAction}>Close</button>
        </div>
      </Modal>
    );
  }
}

export default withRouter(JoinChannelModal);
