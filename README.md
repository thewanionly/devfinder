# devfinder

A web app that let's you search for a GitHub user and display user profile data. This app uses the GitHub users API.

## Technologies used

1. Vite
2. React
3. TypeScript
4. React Query
5. styled-components
6. Framer motion
7. Jest
8. React Testing Library

## Running the app

1. Clone the application.
2. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open the local server URL in your web browser.

## Running the tests

To run test files once:

```
npm run test
```

To run test files and watch for changes:

```
npm run test:all
```

## Folder structure

All source codes live in the `src` folder. Here's how I structured the different sub-folders inside the `src` folder:

- `assets`
  - This is where global static assets such as images and icons are stored.
- `components`
  - This is where components that can be reusable/shared across other components are stored.
- `context`
  - Breakdown global states to seprate contexts depending on their function. Global contexts are stored here
- `hooks`
  - Reusable hooks that is used across the app.
- `services`
  - Functions that are involed in interfacing with external API are stored here.
- `styles`
  - Global styles and theme are stored here.
- `test`
  - Test mocks and setups are stored here.
- `types`
  - Types that are shared across components are stored here.
- `views`
  - This can also be called "pages" (or could be a separate folder as well). The main entry point or container component for each of your view or page lives here. The `App.tsx` file also lives here.

## Contributing

We are using `husky` to run a pre-commit hook whenever we commit and `commitizen` to standardize commit messages. Ideally whenever you want to commit your staged files, you would just run `git cz` or just `cz` and you will be prompted a series of steps to input your commit message in the terminal. After that, the pre-commit hook will run. The issue with this is that whenever the pre-commit hook fails, you will lose your commit message, which you may have not saved somewhere else. So what we really want is whenever we run `cz`, the pre-commit hook should run first and if it succeeded, that's the only time the commit message prompt will be shown. There's really no progress with this issue yet: https://github.com/commitizen/cz-cli/issues/604.

For the meantime, we'll do this process instead - whenever you want to commit, do the ff:

1. Run `npx lint-staged`. This is essentially what will be run during the pre-commit hook process which can be found in `.husky/pre-commit` file.
2. If there are no issues with running the pre-commit hook, run `git cz` or `cz` and enter your commit message.
