import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import initializeAxe from './axe';

import Example1 from './unprepared/example1';
import Example2 from './unprepared/example2';
import Example3 from './unprepared/example3';
import Example4 from './unprepared/example4';
import Example5 from './flickering/example5';
import Example6 from './flickering/example6';
import Example7 from './flickering/example7';
import Example8 from './flickering/example8';

initializeAxe();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <h1>Cypress Code Smells</h1>
        </header>
        <main>
          <ul>
            <li>
              Unprepared Element
              <ul>
                <li>
                  <Link to="/unprepared/example1" data-cy="example1">
                    Example 1
                  </Link>
                </li>
                <li>
                  <Link to="/unprepared/example2" data-cy="example2">
                    Example 2
                  </Link>
                </li>
                <li>
                  <Link to="/unprepared/example3" data-cy="example3">
                    Example 3
                  </Link>
                </li>
                <li>
                  <Link to="/unprepared/example4" data-cy="example4">
                    Example 4
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              Flickering Element
              <ul>
                <li>
                  <Link to="/flickering/example5" data-cy="example5">
                    Example 5
                  </Link>
                </li>
                <li>
                  <Link to="/flickering/example6" data-cy="example6">
                    Example 6
                  </Link>
                </li>
                <li>
                  <Link to="/flickering/example7" data-cy="example7">
                    Example 7
                  </Link>
                </li>
                <li>
                  <Link to="/flickering/example8" data-cy="example8">
                    Example 8
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
            <Route path="/unprepared/example3">
              <Example3 />
            </Route>
            <Route path="/unprepared/example4">
              <Example4 />
            </Route>
            <Route path="/flickering/example5">
              <Example5 />
            </Route>
            <Route path="/flickering/example6">
              <Example6 />
            </Route>
            <Route path="/flickering/example7">
              <Example7 />
            </Route>
            <Route path="/flickering/example8">
              <Example8 />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
