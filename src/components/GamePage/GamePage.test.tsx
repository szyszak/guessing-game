import React from 'react';
import { GamePage } from './GamePage';
import { renderWithStore } from '../../util';

describe('<GamePage />', () => {
  it('renders correct content', () => {
    const { getByTestId, getAllByTestId } = renderWithStore(<GamePage />);

    const canvas = getByTestId('canvas');
    const progressBar = getByTestId('progress-bar');
    const buttons = getAllByTestId('button');

    expect(canvas).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();
    expect(buttons).toHaveLength(4);
  });
});
