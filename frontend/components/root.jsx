import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => {
  return(
    <Provider store={store}>
      <HashRouter>
        <App store={store}/>
      </HashRouter>
    </Provider>
  );
};

export default Root;
