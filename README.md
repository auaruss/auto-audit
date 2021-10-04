# Sparkbox React Storybook Starter

This project utilizes [Next.js][next], [TypeScript][typescript], and [Storybook][storybook] to create [React][react] components.

The Next-based website can be either a documentation page for a Storybook-based design system, or a full production site with component documentation. For Storybook projects without the requirement of a full app, Next may be unnecessary, thanks to the robust capabilities of Storybook.

An excellent free option for deploying this finished site is [Netlify][netlify].

## Quick Start

To begin development:

1. `npm i` to install dependencies.
1. `npm run build:next` to build the Next app.
1. `npm run start:dev` to start a development server.

To view the Storybook Components:

1. `npm run storybook` to start the Storybook server.
1. Navigate to [localhost:6006][6006]

To build a "production" site with a published version of Storybook:

1. `npm run build` to build both the Next app and compile static Storybook pages to `/public/storybook/`
1. `npm start` to start the server *without* a watch task.
1. Alternatively, `npm run start:prod` to do both.
1. Navigate to [localhost:3000][3000] to see the Pages index.
1. Head to [localhost:3000/storybook/index.html][3000/storybook] to see your static Storybook.

**Note:** Your project can with or without a deployed Storybook instance (`/storybook/index.html` from the Next App). If you'd like to remove the static Storybook from your deploy, update the build task to be:

```json
 "build": "npm run build:next",
```

## Storybook Add-ons

This project comes with two add-ons, [Storybook Docs][storybook-docs] and [Storybook Backgrounds][storybook-backgrounds] (with black and white by default). These powerful add-ons should be enough to get you started with most projects.

## Styles

As your CSS solution is likely to be tied to individual preference, at this time, this repository does not come with a way to style components. In the future we plan to offer scripts for installing either a SCSS or CSS-in-JS option. For now, you are on your own.

## Code Quality

### Tests

This project utilizes [Jest][jest] with [React Testing Library][testing-library] to run unit tests.

- To run the tests, `npm test`.
- To run only the unit tests, `npm run test:unit`.
- If you'd like to see code coverage, `npm run test:coverage`.
- If you want to run the tests with a server, `npm run test:watch`.
- To update any Snapshots, `npm run test:update`.

### Linting

We use [ESLint][eslint] with [the Sparkbox ESLint config][eslintsparkbox] for JavaScript linting.

- By default, the linter(s) run with our test script, `npm test`.
- To run just the linter(s), `npm run lint`.

### Continuous Integration

This template comes with a starter config for [CircleCI][circleci] in `.circleci/config.yml`. You may wish to modify this to suit your own needs.


[next]: https://nextjs.org/
[storybook]: https://storybook.js.org/
[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[3000]: http://localhost:3000/
[3000/storybook]: http://localhost:3000/storybook/index.html
[6006]: http://localhost:6006/
[jest]: https://jestjs.io/en/
[eslint]: https://github.com/eslint/eslint
[eslintsparkbox]: https://www.npmjs.com/package/@sparkbox/eslint-config-sparkbox
[circleci]: https://circleci.com/
[storybook-docs]: https://storybook.js.org/docs/react/writing-docs/docs-page
[storybook-backgrounds]: https://storybook.js.org/docs/react/essentials/backgrounds
[testing-library]: https://testing-library.com/docs/react-testing-library/intro/
[netlify]: https://www.netlify.com/
