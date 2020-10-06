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
import Example9 from './impatient/example9';
import Example10 from './impatient/example10';
import Example11 from './impatient/example11';
import Example12 from './impatient/example12';
import Example13 from './impatient/example13';
import Example14 from './impatient/example14';

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
                  - Trivial Failure
                </li>
                <li>
                  <Link to="/unprepared/example2" data-cy="example2">
                    Example 2
                  </Link>
                  - Trivial Solution
                </li>
                <li>
                  <Link to="/unprepared/example3" data-cy="example3">
                    Example 3
                  </Link>
                  - Redux Failure
                </li>
                <li>
                  <Link to="/unprepared/example4" data-cy="example4">
                    Example 4
                  </Link>
                  - Redux Solution
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
                  - Trivial Failure
                </li>
                <li>
                  <Link to="/flickering/example6" data-cy="example6">
                    Example 6
                  </Link>
                  - Trivial Solution
                </li>
                <li>
                  <Link to="/flickering/example7" data-cy="example7">
                    Example 7
                  </Link>
                  - Redux Failure
                </li>
                <li>
                  <Link to="/flickering/example8" data-cy="example8">
                    Example 8
                  </Link>
                  - Redux Solution
                </li>
              </ul>
            </li>
            <li>
              Impatient Test
              <ul>
                <li>
                  <Link to="/impatient/example9" data-cy="example9">
                    Example 9
                  </Link>
                  - Trivial Failure
                </li>
                <li>
                  <Link to="/impatient/example10" data-cy="example10">
                    Example 10
                  </Link>
                  - Instant-State-Change Solution
                </li>
                <li>
                  <Link to="/impatient/example11" data-cy="example11">
                    Example 11
                  </Link>
                  - Loading-State Solution
                </li>
                <li>
                  <Link to="/impatient/example12" data-cy="example12">
                    Example 12
                  </Link>
                  - Green-Light Solution
                </li>
                <li>
                  <Link to="/impatient/example13" data-cy="example13">
                    Example 13
                  </Link>
                  - Redux Failure
                </li>
                <li>
                  <Link to="/impatient/example14" data-cy="example14">
                    Example 14
                  </Link>
                  - Redux Loading-State Solution
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
            <Route path="/impatient/example9">
              <Example9 />
            </Route>
            <Route path="/impatient/example10">
              <Example10 />
            </Route>
            <Route path="/impatient/example11">
              <Example11 />
            </Route>
            <Route path="/impatient/example12">
              <Example12 />
            </Route>
            <Route path="/impatient/example13">
              <Example13 />
            </Route>
            <Route path="/impatient/example14">
              <Example14 />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
