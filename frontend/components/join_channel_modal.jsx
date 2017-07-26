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
    // this.props.history.push(`/messages/${channelId}`);
  }

  formatDate(dateString) {
    const allMonths = "January,February,March,April,May,June,July,August,September,October,November,December";
    // March 14th 2017
    const date = new Date(dateString);
    const month = allMonths.split(',')[date.getMonth()];

    const suffixes = "st,nd,rd".split(',');

    let day = date.getDate();
    if (date.getDate() < 3) {
      day += suffixes[day];
    } else {
      day += 'th';
    }

    return `${month} ${day}, ${date.getFullYear()}`;
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
                  <div className="channel-option-row"># {channel.name}</div>
                  <div className="channel-option-row">Created on {this.formatDate(channel.created_at)}</div>
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
          <button className="close-button" onClick={this.props.closeAction}>
            <i className="fa fa-times fa-3x" aria-hidden="true"></i>
          </button>

          {content}
        </div>
      </Modal>
    );
  }
}

export default withRouter(JoinChannelModal);
