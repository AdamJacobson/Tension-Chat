import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, withRouter } from 'react-router-dom';
import SplashHeader from './splash_header';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.clearErrors = this.props.clearErrors.bind(this);

    this.state = {username: "", password: ""};
    this.demoUsername = "tension_tamer";
    this.demoPassword = "password";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillMount() {
    this.clearErrors();
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  disableButtons() {
    $("#auth-form :button").prop("disabled", true);
  }

  demoLogin(e) {
    e.preventDefault();

    this.disableButtons();

    // clear any inputs
    this.setState({'username': ''});
    this.setState({'password': ''});

    // enter demo info. Username first then password
    let idx = 0;
    let intervalUsername = setInterval(() => {
      this.setState({'username': this.state['username'] + this.demoUsername[idx]});
      idx++;
      if (this.state['username'].length >= this.demoUsername.length ) {
        clearInterval(intervalUsername);
        idx = 0;

        let intervalPassword = setInterval(() => {
          this.setState({'password': this.state['password'] + this.demoPassword[idx]});
          idx++;
          if (this.state['password'].length >= this.demoPassword.length ) {
            clearInterval(intervalPassword);

            this.handleSubmit();
          }
        }, 50);
      }
    } , 50);
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    const user = { user: this.state };
    this.props.processForm(user);
  }

  render() {
    if (this.props.loggedIn) {
      console.log("Now logged in");
      return <Redirect to="/messages"/>;
    }

    let headerText, footerLink, footerText, buttonText, demoButton;
    if (this.props.formType === 'login') {
      headerText = "Log In to Tension";
      buttonText = "Log In";
      footerText = "Not a member yet?";
      footerLink = (<Link to="/signup">Sign Up</Link>);
      demoButton = (<button className="button" id="demo" onClick={this.demoLogin}>Demo Login</button>);
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

          <ul className="auth-errors">
            {this.props.errors.map((error, i) => <li key={i} className="error" >{error}</li>)}
          </ul>

          <form id="auth-form" className="auth-form">
            <h2>{headerText}</h2>

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
              {demoButton}
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
