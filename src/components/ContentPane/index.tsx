import React, { ReactElement } from "react";
import AuditTable from "../AuditTable";

const sparkboxData = {
  site: "sparkbox.com",
  pages: [
    {
      _id: 1,
      name: "sparkbox.com",
      performance: 96,
      accessibility: 73,
      bestPractices: 94,
      seo: 71,
    },
    {
      _id: 2,
      name: "sparkbox.com/work",
      performance: 72,
      accessibility: 82,
      bestPractices: 93,
      seo: 73,
    },
    {
      _id: 3,
      name: "sparkbox.com/team",
      performance: 78,
      accessibility: 98,
      bestPractices: 87,
      seo: 91,
    },
    {
      _id: 4,
      name: "sparkbox.com/contact",
      performance: 77,
      accessibility: 91,
      bestPractices: 73,
      seo: 72,
    },
    {
      _id: 5,
      name: "sparkbox.com/work/dpl",
      performance: 92,
      accessibility: 91,
      bestPractices: 89,
      seo: 74,
    },
  ],
};

export const ContentPane = (): ReactElement => (
  <main className="content-pane">
    <AuditTable { ...sparkboxData } />
  </main>
);

export default ContentPane;
