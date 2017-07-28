import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {
    let header, description, topRow, bottomRow;

    if (this.props.currentChannel && this.props.currentChannel[0] === '@') {
      topRow = (
        <div className="header-row-1">
          <h3>{this.props.currentChannel}</h3>
        </div>
      );
    } else if (Object.keys(this.props.channels).length !== 0 && this.props.currentChannel) {
      topRow = (
        <div className="header-row-1">
          <h3>#{this.props.channels[this.props.currentChannel].name}</h3>
        </div>
      );
      bottomRow = (
        <div className="header-row-2">
          <div className="space-between">
            <span>{this.props.channels[this.props.currentChannel].description}</span>
            <div className="leave-button clickable" onClick={() => this.props.leaveChannel(this.props.currentChannel)}>
              Leave #{this.props.channels[this.props.currentChannel].name}
            </div>
          </div>
        </div>
      );
    } else {
      topRow = (<h3>&nbsp;</h3>);
    }

    return(
      <div className="header-container">
        <div className="header-content">
          {topRow}
          {bottomRow}
        </div>
      </div>
    );
  }
}

export default Header;
