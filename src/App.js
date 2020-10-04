import React from 'react';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
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
          <ul>
            <li>
              <Link to="/example1" data-cy="example1">
                Example 1
              </Link>
            </li>
            <li>
              <Link to="/example2" data-cy="example2">
                Example 2
              </Link>
            </li>
            <li>
              <Link to="/example3" data-cy="example3">
                Example 3
              </Link>
            </li>
          </ul>
          <Switch></Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
