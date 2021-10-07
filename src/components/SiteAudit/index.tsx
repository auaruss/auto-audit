import React, { ReactElement } from 'react';

type Props = {
  site: string;
};

export const SiteAudit = ({ site }: Props): ReactElement => (
  <div className="site-audits__title" title="{site}">
    { site }
  </div>
);
