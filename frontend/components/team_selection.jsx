import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, HashRouter, Link, NavLink, withRouter, Redirect } from 'react-router-dom';

import SplashHeader from './splash_header';

class TeamSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.logout = this.props.logout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.requestTeams();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.teams) {
      this.setState({ value: newProps.teams[0].id });
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("state changed to " + event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return(
      <div className="auth-page">

        <SplashHeader light={true}/>

        <div className="auth-content">

          <form id="auth-form" className="auth-form">
            <h2>Select Team</h2>

            <select className="team-select" value={this.state.value} onChange={this.handleChange}>
              {this.props.teams.map((team, i) => <TeamOption key={i} idx={i} team={team} />)}
            </select>

            <div className="auth-buttons">
              <button className="button" id="submit" onClick={this.handleSubmit}>Join Team</button>
              <button className="button" id="logout" onClick={this.logout}>Log Out</button>
            </div>
          </form>

          <div className="auth-footer-text">
            <div>Trying to create a team? <Link to="/teams">Create Team</Link></div>
          </div>

        </div>
      </div>
    );
  }
}

const TeamOption = ({ team, idx }) => {
  return(
    <option value={team.id} >{team.name}</option>
  );
};

export default TeamSelection;
