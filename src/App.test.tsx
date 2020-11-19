import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const textElem = getByText(/guessing game/i);

    expect(textElem).toBeInTheDocument();
  });
});
