import React, { ReactElement } from "react";

type Page = {
  _id: number;
  name: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export type Props = {
  site: string;
  pages: Page[];
};

const makeAuditTableData = (marker: string, score: number, testId: string): ReactElement => (
  <td
    className="audit-table__data"
    data-testid={testId}
  >
    <span className="mobile-table-marker">{marker}: </span>
    {score}
  </td>
);

const makeAuditTableRow = ({
  _id,
  name,
  performance,
  accessibility,
  bestPractices,
  seo,
}: Page): ReactElement => (
  <tr className="audit-table__row" key={ _id }>
    <th className="audit-table__header">{name}</th>
    {makeAuditTableData('Performance', performance, `performance-${_id}`)}
    {makeAuditTableData('Accessibility', accessibility, `accessibility-${_id}`)}
    {makeAuditTableData('Best Practices', bestPractices, `best-practices-${_id}`)}
    {makeAuditTableData('SEO', seo, `seo-${_id}`)}
  </tr>
);

export const AuditTable = ({ site, pages }: Props): JSX.Element => (
  <table className="audit-table">
    <caption className="audit-table__caption">
      Summary of the Google Lighthouse attributes of { site }
    </caption>
    <thead className="audit-table__header">
      <tr>
        <th>URL</th>
        <th>Performance</th>
        <th>Accessibility</th>
        <th>Best practices</th>
        <th>SEO</th>
      </tr>
    </thead>
    <tbody className="audit-table__body">
      { pages.map(makeAuditTableRow) }
    </tbody>
  </table>
);

export default AuditTable;
