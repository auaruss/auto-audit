import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SiteAudit } from '.';

describe('the SiteAudit component', () => {
  test('renders a SiteAudit element', () => {
    render(<SiteAudit site='sparkbox.com'/>);
    expect(screen.getByTestId('sparkbox.com')).toBeTruthy();
  });
});
