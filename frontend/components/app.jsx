import React from 'react';
import { Route, Switch } from 'react-router';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import Splash from './splash';
import ChatContainer from './chat_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <ProtectedRoute path="/messages" component={ChatContainer} />
    </Switch>
  );
};

export default App;
