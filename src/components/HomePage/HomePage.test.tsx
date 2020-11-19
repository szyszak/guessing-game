import React from 'react';
import { HomePage } from './HomePage';
import { renderWithRouter } from '../../util';

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRouter(<HomePage />);

    const elem = getByText(/guessing game/i);

    expect(elem).toBeInTheDocument();
  });
});
