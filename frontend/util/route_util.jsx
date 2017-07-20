import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Auth only meant to be shown to users not logged in
// If logged in, send user to /messages
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/teams" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
