import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Tension Chat</h1>
        <GreetingContainer/>
      </header>

      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
    </div>
  );
};

export default App;
