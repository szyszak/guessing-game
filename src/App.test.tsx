import React from 'react';
import fireEvent from '@testing-library/user-event';
import { renderWithStore } from './util/renderWithStore';
import App from './App';

describe('<App />', () => {
  it('renders the home page', () => {
    const { getByText } = renderWithStore(<App />);

    const elem = getByText(/guessing game/i);

    expect(elem).toBeInTheDocument();
  });

  it('navigates to game page', () => {
    const { getByTestId } = renderWithStore(<App />);

    const startButton = getByTestId('start-button');

    fireEvent.click(startButton);

    const canvas = getByTestId('canvas');

    expect(canvas).toBeInTheDocument();
  });
});
