import React, { ReactElement } from 'react';
import { Header } from '../src/components/Header';
import { SiteAudits } from '../src/components/SiteAudits';
import { ContentPane } from '../src/components/ContentPane';

const Home = (): ReactElement => (
  <div className='app'>
    <Header />
    <SiteAudits />
    <ContentPane />
  </div>
);

export default Home;
