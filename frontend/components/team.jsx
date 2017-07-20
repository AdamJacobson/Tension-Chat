import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, HashRouter, Link, NavLink, withRouter, Redirect } from 'react-router-dom';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.team.id) {
      const team_id = window.sessionStorage.getItem("team_id");
      console.log("team_id: " + team_id);
      this.props.requestSingleTeam(team_id);
    }
  }

  render() {
    return(
      <div className="team-container">
        {this.props.team.name}
      </div>
    );
  }
}

export default Team;
