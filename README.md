<h1 align="center">
<br>
  <a href="https://github.com/stefanfrancis93/react-boilerplate"><img src="https://i.imgur.com/GpQk5wG.png" alt="React Boilerplate" width=128"></a>
<br>
<br>
React Boilerplate
</h1>

<p align="center">The best boilerplate for your React projects.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Introduction

This boilerplate contains all you need to start your next React.js project. Simple, robust, well-organized, all you need to do is clone, install and you're ready to start.

## Features

This boilerplate features all the latest tools and practices in the industry.

- ⚛ **React** — 16.13.1 with Hooks
- ♻ **Redux** — State Management with middleware to handle async requests
- 🛠 **Babel** — ES6 syntax, Airbnb & React/Recommended config
- 🚀 **Webpack** — Hot Reloading, Code Splitting, Optimized Build
- ✅ **Tests** — Jest & React Testing Library
- 💖 **Lint** — ESlint
- 🐶 **Husky** — Prevent bad commits

## Getting started

1.  Ensure you have the latest git, Node.js and Yarn installed on your machine

    ```bash
    node --version
    ## ≥ 12.0

    yarn --version
    ## ≥ 1.22
    ```

1.  Clone the repo from GitLab

    ```bash
    cd PATH/TO/MISC/PROJECTS
    git clone https://github.com/stefanfrancis93/react-boilerplate.git <your project name>
    cd react-boilerplate
    ```

1.  Remove `.git` folder, `rm -rf .git`

1.  Install npm dependencies using Yarn from the root directory

    ```bash
    yarn
    ```

1.  Start the application at `http://localhost:8080`.

    ```bash
    yarn start
    ```

    Modifying any of the files will refresh the app, thanks to React.js hot module reloading.
    To stop running the server, press `ctrl+c`.

1.  If you want to generate a production build:

    ```bash
    yarn build
    ```

## Commands

- `yarn start` - start the dev server
- `yarn build` - create a production ready build in `build` folder
- `yarn lint` - execute an eslint check
- `yarn fix` - execute an eslint and fix the errors
- `yarn test` - run all tests
- `yarn test:watch` - run all tests in watch mode
- `yarn test:coverage` - coverage mode

## License

MIT license, Copyright (c) 2018 Stefan Francis.
