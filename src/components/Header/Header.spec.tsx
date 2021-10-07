import * as React from "react";
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

import { Header } from ".";

describe('the Header component', () => {
  test('renders a header element', () => {
    const result = render(<Header />);
    expect(screen.getByText('Auto audit dashboard')).toBeTruthy();
  });
});
