import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    // { loggedIn, errors, formType, processForm }
    super(props);

    this.state = {username: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { user: this.state };
    this.props.processForm(user);
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/"/>;
    }

    let headerText;
    let footerLink;
    let footerText;
    if (this.props.formType === 'login') {
      headerText = "Log In";
      footerText = "Not a member yet?";
      footerLink = (<Link to="/signup">Sign Up</Link>);
    } else {
      headerText = "Sign Up";
      footerText = "Already signed up?";
      footerLink = (<Link to="/login">Log In</Link>);
    }

    return(
      <div className="auth-form">
        <h1>{headerText}</h1>

        <form>
          <ul className="errors">
            {this.props.errors.map((error, i) => <li key={i} className="error" >{error}</li>)}
          </ul>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}></input>

          <button id="submit" onClick={this.handleSubmit}>{headerText}</button>
        </form>

        <div>{footerText}</div>
        {footerLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);
