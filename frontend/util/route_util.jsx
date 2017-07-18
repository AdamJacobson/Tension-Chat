import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Auth only meant to be shown to users not logged in
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
