import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuditTable from '.';
import { Props as AuditTableProps } from '.';

const sparkboxData: AuditTableProps = {
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

const mapping: Map<
  string,
  'name'
  | 'performance'
  | 'accessibility'
  | 'bestPractices'
  | 'seo'
> = new Map([
  ['URL', 'name'],
  ['Performance', 'performance'],
  ['Accessibility', 'accessibility'],
  ['Best practices', 'bestPractices'],
  ['SEO', 'seo'],
]);

describe('the AuditTable component', () => {
  beforeEach(() =>{
    render(<AuditTable { ...sparkboxData }/>);
  });

  it('renders an audit caption properly', () => {
    expect(screen.getByText('attributes of sparkbox.com', { exact: false })).toBeTruthy();
  });

  it('generates a row per page of data passed in', () => {
    expect(screen.getAllByText('Performance:', { exact: false }).length)
      .toEqual(sparkboxData.pages.length);
  });

  it('generates the first row with the correct performance score', () => {
    expect(
      screen.getByTestId(`performance-${sparkboxData.pages[0]._id}`)
    ).toHaveTextContent(sparkboxData.pages[0].performance.toString());
  });
  
  it('generates a row with the correct accessibility scores', () => {
    expect(
      screen.getByTestId(`accessibility-${sparkboxData.pages[0]._id}`)
    ).toHaveTextContent(sparkboxData.pages[0].accessibility.toString());
  });
  
  it('generates a row with the correct best practices scores',() => {
    expect(
      screen.getByTestId(`best-practices-${sparkboxData.pages[0]._id}`)
    ).toHaveTextContent(sparkboxData.pages[0].bestPractices.toString());
  });
  
  it('generates a row with the correct seo scores', () => {
    expect(
      screen.getByTestId(`seo-${sparkboxData.pages[0]._id}`)
    ).toHaveTextContent(sparkboxData.pages[0].seo.toString());
  });

  describe('table columns scores must match their header', () => {
    const getHeader = (index: number): string | false => {
      const maybeHeader: string | undefined =  
        screen.getByRole('table')
          .querySelector('thead')
          ?.querySelectorAll('th')[index].innerHTML;

      return (maybeHeader) ? maybeHeader : false;
    }

    const doesScoreExistAndMatchHeader = (
      property: 'name'
      | 'performance'
      | 'accessibility'
      | 'bestPractices'
      | 'seo', index: number
    ): boolean => 
      screen.getByRole('table')
        .querySelector('tbody')
        ?.querySelectorAll('tr')[0].children[index].innerHTML
        .includes(sparkboxData.pages[0][property].toString())
      || false;

    it('matches the first column\'s header to its first score', () => {
      const header: string | false = getHeader(0);
      if (!header) fail('Couldn\'t find a valid header in the first row');

      const property = mapping.get(header);
      if (!property) fail('Couldn\'t find a matching property for our header');

      expect(doesScoreExistAndMatchHeader(property, 0)).toBeTruthy();
    });

    it('matches the second column\'s header to its first score', () => {
      const header: string | false = getHeader(1);
      if (!header) fail('Couldn\'t find a valid header in the first row');

      const property = mapping.get(header);
      if (!property) fail('Couldn\'t find a matching property for our header');

      expect(doesScoreExistAndMatchHeader(property, 1)).toBeTruthy();
    });

    it('matches the third column\'s header to its first score', () => {
      const header: string | false = getHeader(2);
      if (!header) fail('Couldn\'t find a valid header in the first row');

      const property = mapping.get(header);
      if (!property) fail('Couldn\'t find a matching property for our header');

      expect(doesScoreExistAndMatchHeader(property, 2)).toBeTruthy();
    });

    it('matches the fourth column\'s header to its first score', () => {
      const header: string | false = getHeader(3);
      if (!header) fail('Couldn\'t find a valid header in the first row');

      const property = mapping.get(header);
      if (!property) fail('Couldn\'t find a matching property for our header');

      expect(doesScoreExistAndMatchHeader(property, 3)).toBeTruthy();
    });

    it('matches the fifth column\'s header to its first score', () => {
      const header: string | false = getHeader(4);
      if (!header) fail('Couldn\'t find a valid header in the first row');

      const property = mapping.get(header);
      if (!property) fail('Couldn\'t find a matching property for our header');

      expect(doesScoreExistAndMatchHeader(property, 4)).toBeTruthy();
    });
  });
});
