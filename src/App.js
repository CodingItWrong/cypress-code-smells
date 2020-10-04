import React from 'react';
import initializeAxe from './axe';

initializeAxe();

const App = () => {
  return (
    <>
      <header>
        <h1>Reactup App</h1>
      </header>
      <main>
        <p>Hello, world.</p>
      </main>
    </>
  );
};

export default App;
