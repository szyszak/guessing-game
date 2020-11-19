import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { render, RenderResult } from '@testing-library/react';

const renderWithStore = (children: ReactNode): RenderResult => {
  return render(<Provider store={store}>{children}</Provider>);
};

export { renderWithStore };
