import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ContentPane } from '.';

describe('the ContentPane component', () => {
  test('renders a table inside', () => {
    const result = render(<ContentPane />);
    expect(screen.getByRole('table')).toBeTruthy();
  });
});
