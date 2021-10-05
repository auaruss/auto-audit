import * as React from 'react';

const Home = () => (
  <div className="app">
    <header className="header">
      <h1>Auto audit dashboard</h1>
    </header>
    <nav className="site-audits">
      <div className="site-audits__mobile-dropdown">
        <h2 className="site-audits__dropdown-prompt">Choose site</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" className="site-audits__dropdown-icon">
          <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"/>
        </svg>
      </div>
      <div className="site-audits__title" title="sparkbox.com/hello-world">
        sparkbox.com/hello-world
      </div>
      <div className="site-audits__title">
        sparkbox.com
      </div>
    </nav>
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
  </div>
);

export default Home;
