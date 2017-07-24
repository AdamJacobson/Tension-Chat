import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class JoinChannelModal extends React.Component {
  render() {

    let content = (<div>None set</div>);
    if (this.props.channels.entities.length > 0) {
      content = (
        <select>
          {this.props.channels.entities.map((channel) => {
            return (<option>{channel.name}</option>);
          })}
        </select>
      );
    } else {
      content = (
        <div>None</div>
      );
    }

    return(
      <Modal id="joinModal" isOpen={this.props.isOpen} contentLabel="Modal">
        <h3>Join a Channel!!!</h3>

        {content}

        <button onClick={this.props.closeAction}>Close</button>
      </Modal>
    );
  }
}

export default JoinChannelModal;
