import React, { ReactElement } from 'react';
import styles from '../../../static/scss/Header.module.scss';

export const Header = (): ReactElement  => (
  <header className={ styles.header }>
    <h1>Auto audit dashboard</h1>
  </header>
);
