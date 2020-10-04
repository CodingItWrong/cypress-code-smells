import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders a welcome message', () => {
    const {queryByText} = render(<App />);

    expect(queryByText('Hello, world.')).not.toBeNull();
  });
});
