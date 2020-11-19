import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, RenderResult } from '@testing-library/react';

const renderWithRouter = (children: ReactNode): RenderResult => {
  const history = createMemoryHistory();

  return render(<Router history={history}>{children}</Router>);
};

export { renderWithRouter };
