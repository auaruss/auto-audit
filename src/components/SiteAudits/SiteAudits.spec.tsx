import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SiteAudits } from '.';

describe('the SiteAudits component', () => {
  test('renders a SiteAudits element', () => {
    render(<SiteAudits />);
    expect(screen.getByText('Choose site')).toBeTruthy();
    expect(screen.getByTestId('sparkbox.com')).toBeTruthy();
    expect(screen.getByTestId('humsci.stanford.edu')).toBeTruthy();
    
  });
});
