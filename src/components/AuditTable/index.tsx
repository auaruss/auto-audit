import React, { ReactElement } from "react";

type Page = {
  _id: number;
  name: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

type Props = {
  site: string;
  pages: Page[];
};

export const AuditTableRow = ({
  name,
  performance,
  accessibility,
  bestPractices,
  seo,
}: Page): ReactElement => (
  <tr className="audit-table__row">
    <th className="audit-table__header">{name}</th>
    <td className="audit-table__data">
      <span className="mobile-table-marker">Performance: </span>
      {performance}
    </td>
    <td className="audit-table__data">
      <span className="mobile-table-marker">Accessibility: </span>
      {accessibility}
    </td>
    <td className="audit-table__data">
      <span className="mobile-table-marker">Best Practices: </span>
      {bestPractices}
    </td>
    <td className="audit-table__data">
      <span className="mobile-table-marker">SEO: </span>
      {seo}
    </td>
  </tr>
);

export const AuditTableCaption = ({ site }: { site: string }): ReactElement => (
  <caption className="audit-table__caption">
    Summary of the Google Lighthouse attributes of {site}
  </caption>
);

export const AuditTableHeader = (): ReactElement => (
  <thead className="audit-table__header">
    <tr>
      <th>URL</th>
      <th>Performance</th>
      <th>Accessibility</th>
      <th>Best practices</th>
      <th>SEO</th>
    </tr>
  </thead>
);

export const AuditTable = ({ site, pages }: Props): ReactElement => (
  <table className="audit-table">
    <AuditTableCaption site={site} />
    <AuditTableHeader />
    <tbody className="audit-table__body">
      {pages.map((page) => (
        <AuditTableRow {...page} key={page._id} />
      ))}
    </tbody>
  </table>
);

export default AuditTable;
