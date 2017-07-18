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
      console.log("Now logged in");
      return <Redirect to="/messages"/>;
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
      <div className="auth-page">
        <h2>{headerText}</h2>

        <form className="auth-form">
          <ul className="auth-errors">
            {this.props.errors.map((error, i) => <li key={i} className="error" >{error}</li>)}
          </ul>

          <label htmlFor="username">Username</label>
          <input className="auth-input"
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}></input>

          <label htmlFor="password">Password</label>
          <input className="auth-input"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}></input>

          <button className="button" id="submit" onClick={this.handleSubmit}>{headerText}</button>
        </form>

        <div>{footerText}</div>
        {footerLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);
