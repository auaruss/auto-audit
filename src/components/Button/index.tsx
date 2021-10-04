import React, { ReactElement } from 'react';

type Props = {
  text: string;
};

export function Button({ text }: Props): ReactElement {
  return <button type="button">{text}</button>;
}
