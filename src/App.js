import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import initializeAxe from './axe';

initializeAxe();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <h1>Cypress Flake Test</h1>
        </header>
        <main>
          <ul></ul>
          <Switch></Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
