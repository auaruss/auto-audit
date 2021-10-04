import * as React from "react";
import { render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

import { Button } from ".";

describe('the Button component', () => {
  test('matches the Snapshot', () => {
    const tree = TestRenderer
    .create(<Button text="Test Button" />)
    .toJSON();
    expect(
      (tree)
    ).toMatchSnapshot();
  });

  test('renders a button element', () => {
    const result = render(<Button text="Test Button" />);
    expect(screen.getByRole('button')).toHaveTextContent('Test Button')
  });
});
