import React from 'react';
import { Route, Switch } from 'react-router';

import SessionFormContainer from './session_form_container';
import Splash from './splash';
import ChatContainer from './chat_container';
import TeamSelectionContainer from './team_selection_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <ProtectedRoute exact path="/teams" component={TeamSelectionContainer}/>

      // Need to handle /teams/:teamId without /messages. Redirect?

      <ProtectedRoute path="/teams/:teamId/messages" component={ChatContainer}/>

      <Route path="/" render={() => <div>404!</div>} />
    </Switch>
  );
};

export default App;
