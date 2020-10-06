import React from 'react';
import ReactDOM from 'react-dom';

const initializeAxe = () => {
  // DO NOT reorganize to a guard clause/early return, or ES6 import.
  // Needs to be in this form so it is stripped from production build
  if (process.env.NODE_ENV !== 'production') {
    const axe = require('react-axe');

    // Please enter a rationale for each rule you disable
    const config = {
      rules: [
        {
          id: 'region',
          enabled: false,
          // rationale: React SPAs render in a single div, but this should contain multiple landmarks
        },
        {
          id: 'landmark-one-main',
          enabled: false,
          // rationale: Unclear why failing. There is only one <main> tag. Maybe failing because of the containing div, like `region`?
        },
      ],
    };

    axe(React, ReactDOM, 1000, config);
  }
};

export default initializeAxe;
