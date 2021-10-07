import React, { ReactElement } from 'react';

const sites: string[] = [
  'sparkbox.com',
  'humsci.stanford.edu',
];

export const SiteAudits = (): ReactElement => (
  <nav className='site-audits'>
    <div className='site-audits__mobile-dropdown'>
      <h2 className='site-audits__dropdown-prompt'>Choose site</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" className='site-audits__dropdown-icon'>
        <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"/>
      </svg>
    </div>
    <div className='site-audits__title' title="sparkbox.com">
      sparkbox.com
    </div>
    <div className='site-audits__title' title="humsci.stanford.edu">
      humsci.stanford.edu
    </div>
  </nav>
);
