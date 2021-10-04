import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Components/Button',
};

export const WithText = () => <Button text="I'm a Button!" />;
