import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import initializeAxe from './axe';

initializeAxe();

const App = () => {
  return (
    <Router>
      <header>
        <h1>Reactup App</h1>
      </header>
      <main>
        <p>Hello, world.</p>
      </main>
    </Router>
  );
};

export default App;
