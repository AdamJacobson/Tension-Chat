import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, withRouter } from 'react-router-dom';
import SplashHeader from './splash_header';

class SessionForm extends React.Component {
  constructor(props) {
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

    let headerText, footerLink, footerText, buttonText;
    if (this.props.formType === 'login') {
      headerText = "Log In to Tension";
      buttonText = "Log In";
      footerText = "Not a member yet?";
      footerLink = (<Link to="/signup">Sign Up</Link>);
    } else {
      headerText = "Sign Up for Tension";
      buttonText = "Sign Up";
      footerText = "Already signed up?";
      footerLink = (<Link to="/login">Log In</Link>);
    }

    return(
      <div className="auth-page">

        <SplashHeader light={true}/>

        <div className="auth-content">

          <form className="auth-form">
            <h2>{headerText}</h2>

            <ul className="auth-errors">
              {this.props.errors.map((error, i) => <li key={i} className="error" >{error}</li>)}
            </ul>

            <div>Enter your <strong>username</strong> and <strong>password</strong></div>

            <input className="auth-input"
              id="username"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}></input>

            <input className="auth-input"
              id="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}></input>

            <div className="auth-buttons">
              <button className="button" id="submit" onClick={this.handleSubmit}>{buttonText}</button>
              <button className="button" id="submit" onClick={this.handleSubmit}>Demo Login</button>
            </div>
          </form>
          <div className="auth-footer-text">
            {footerText} {footerLink}
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
