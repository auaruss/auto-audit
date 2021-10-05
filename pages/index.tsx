import React, { ReactElement } from 'react';
import { Header } from '../src/components/Header';
import { SiteAudits } from '../src/components/SiteAudits';
import { ContentPane } from '../src/components/ContentPane';
import styles from '../static/scss/Home.module.scss';

const Home = (): ReactElement => (
  <div className={styles.app}>
    <Header />
    <SiteAudits />
    <ContentPane />
  </div>
);

export default Home;
