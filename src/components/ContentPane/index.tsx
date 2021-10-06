import React, { ReactElement } from 'react';
import styles from './ContentPane.module.scss';

export const ContentPane = (): ReactElement  => (
  <main className={styles['content-pane']}>
    <table className={styles['audit-table']}>
      <caption className={styles['audit-table__caption']}>
        Summary of the Google Lighthouse attributes of sparkbox.com
      </caption>
      <thead className={styles['audit-table__header']}>
        <tr>
          <th>URL</th>
          <th>Performance</th>
          <th>Accessibility</th>
          <th>Best practices</th>
          <th>SEO</th>
        </tr>
      </thead>
      <tbody className={styles['audit-table__body']}>
        <tr className={styles['audit-table__row']}>
          <th className={styles['audit-table__header']}>https://sparkbox.com/work</th>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Performance: </span>57
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Accessibility: </span>100
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Best Practices: </span>93
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>SEO: </span>100
          </td>
        </tr>
        <tr className={styles['audit-table__row']}>
          <th>https://sparkbox.com/</th>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Performance: </span>65
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Accessibility: </span>100
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Best Practices: </span>93
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>SEO: </span>100
          </td>
        </tr>
        <tr className={styles['audit-table__row']}>
          <th>https://sparkbox.com/team</th>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Performance: </span>66
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Accessibility: </span>100
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Best Practices: </span>93
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>SEO: </span>100
          </td>
        </tr>
        <tr className={styles['audit-table__row']}>
          <th>https://sparkbox.com/contact</th>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Performance: </span>66
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Accessibility: </span>100
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Best Practices: </span>93
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>SEO: </span>100
          </td>
        </tr>
        <tr className={styles['audit-table__row']}>
          <th>https://sparkbox.com/work/dpl</th>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Performance: </span>67
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Accessibility: </span>100
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>Best Practices: </span>93
          </td>
          <td className={styles['audit-table__data']}>
            <span className={styles['mobile-table-marker']}>SEO: </span>100
          </td>
        </tr>
      </tbody>
    </table>
  </main>
);
