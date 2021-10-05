import React, { ReactElement } from 'react';

export const ContentPane = (): ReactElement  => (
  <main className="content-pane">
    <table className="audit-table">
      <caption className="audit-table__caption">Summary of the Google Lighthouse attributes of sparkbox.com</caption>
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
        <tr className="audit-table__row">
          <th className="audit-table__row-header">https://sparkbox.com/work</th>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Performance: </span>57</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Accessibility: </span>100</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Best Practices: </span>93</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">SEO: </span>100</td>
        </tr>
        <tr className="audit-table__row">
          <th>https://sparkbox.com/</th>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Performance: </span>65</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Accessibility: </span>100</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Best Practices: </span>93</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">SEO: </span>100</td>
        </tr>
        <tr className="audit-table__row">
          <th>https://sparkbox.com/team</th>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Performance: </span>66</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Accessibility: </span>100</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Best Practices: </span>93</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">SEO: </span>100</td>
        </tr>
        <tr className="audit-table__row">
          <th>https://sparkbox.com/contact</th>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Performance: </span>66</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Accessibility: </span>100</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Best Practices: </span>93</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">SEO: </span>100</td>
        </tr>
        <tr className="audit-table__row">
          <th>https://sparkbox.com/work/dpl</th>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Performance: </span>67</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Accessibility: </span>100</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">Best Practices: </span>93</td>
          <td className="audit-table__row-data"><span className="mobile-table-marker">SEO: </span>100</td>
        </tr>
      </tbody>
    </table>
  </main>
);
