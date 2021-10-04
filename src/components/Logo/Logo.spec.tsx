import * as React from "react";
import { render } from '@testing-library/react';

import { Logo } from ".";

describe('the Button component', () => {
  test('renders a button element', () => {
    const result = render(<Logo />);
    expect(result.getByTitle('Sparkbox Logo'));
  });
});
