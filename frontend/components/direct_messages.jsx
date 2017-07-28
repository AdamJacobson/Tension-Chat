import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { subscribeToDirectMessages } from '../connections/direct_messages_connection';

class DirectMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e, user) {
    e.preventDefault();
    // `/teams/${this.props.team.id}/messages/${user.username}`
    this.setState({ modalOpen: false });
    this.props.history.push(`/teams/${this.props.team.id}/messages/@${user.username}`);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return(
      <div className="channel-group">

        <Modal id="newConversationModal" isOpen={this.state.modalOpen} contentLabel="Modal">
          <div className="modal-content">
            <button className="close-button" onClick={this.closeModal}>
              <i className="fa fa-times fa-3x" aria-hidden="true"></i>
            </button>

            <div>
              <h3>Direct Messages</h3>

              <div className="channel-options">
                {this.props.users.map((user, i) => {
                  return (
                    <div key={i} className="clickable channel-option" onClick={(e) => this.handleClick(e, user)}>
                      <div className="side-by-side">
                        <img className="avatar" src="https://i.imgur.com/X3QLIPz.png"/>
                        <div className="channel-option-row">{user.username}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Modal>

        <h4 className="channel-type-header" onClick={this.openModal}>
          <span className="clickable">DIRECT MESSAGES</span>
          <i className="fa fa-plus-circle fa-lg clickable" aria-hidden="true"></i>
        </h4>

        <ul className="channel-list">
          {this.props.conversations.map((conv, i) => {

            let liClasses = "channel-item";
            if (this.props.currentChannel === conv.name) {
              liClasses += " channel-selected";
            }

            let linkClasses = "channel-link";
            linkClasses += conv.unread ? " unread" : " read";

            return(
              <li className={liClasses} key={i}>
                <Link className={linkClasses}
                      to={`/teams/${this.props.team.id}/messages/${conv.name}`}>
                  <div>{conv.name}</div>
                  &nbsp;
                  {conv.unread !== 0 ? (<div className="unread-count">{conv.unread}</div>) : (null)}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default withRouter(DirectMessages);
