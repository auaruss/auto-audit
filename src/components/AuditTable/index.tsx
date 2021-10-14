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
    <td
      className="audit-table__data"
      data-testid={`performance-${_id}`}
    >
      <span className="mobile-table-marker">Performance: </span>
      { performance }
    </td>
    <td
      className="audit-table__data"
      data-testid={`accessibility-${_id}`}
    >
      <span className="mobile-table-marker">Accessibility: </span>
      { accessibility }
    </td>
    <td
      className="audit-table__data"
      data-testid={`best-practices-${_id}`}
    >
      <span className="mobile-table-marker">Best Practices: </span>
      { bestPractices }
    </td>
    <td
      className="audit-table__data"
      data-testid={`seo-${_id}`}
    >
      <span className="mobile-table-marker">SEO: </span>
      { seo }
    </td>
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
