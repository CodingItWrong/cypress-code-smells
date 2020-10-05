import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import initializeAxe from './axe';
import Example1 from './unprepared/example1';
import Example2 from './unprepared/example2';

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
              Unprepared Test
              <ul>
                <li>
                  <Link to="/unprepared/example1" data-cy="example1">
                    Example 1
                  </Link>
                </li>
                <li>
                  <Link to="/unprepared/example1" data-cy="example2">
                    Example 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Switch>
            <Route path="/unprepared/example1">
              <Example1 />
            </Route>
            <Route path="/unprepared/example2">
              <Example2 />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
