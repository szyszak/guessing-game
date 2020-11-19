import React from 'react';
import { Footer } from './Footer';
import { render } from '@testing-library/react';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />);

    const elem = getByText(/all pictures provided/i);

    expect(elem).toBeInTheDocument();
  });
});
