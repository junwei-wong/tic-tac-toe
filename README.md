# Tic-Tac-Toe

A tic-tac-toe game. Being a React developer for about 2 years at the time of this project creation, I never really built projects from scratch. My purpose was to develop a frontend app end-to-end including testing and setting up deployment.

Libraries used:
- Preact, I wanted a lightweight library because it was going to be a small app
- Sweetalert2, colleague recommended this alert library and have been using it since

Challenges:
- Deploying the preact app to github pages, solved using [Github Actions deploy Preactjs to Github Pages](https://github.com/flameddd/blog/blob/master/2019-12-11%EF%BC%9AGithub%20Actions%20deploy%20Preactjs%20to%20Github%20Pages.md)
- Preact app rendering the body twice, solved using [Double rendering pre-rendered pages](https://github.com/preactjs-templates/typescript/issues/55)

## Installing / Getting started
### CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

### Deploying / Publishing
 
I followed this step-by-step guide on how to deploy. 
[Github Actions deploy Preactjs to Github Pages](https://github.com/flameddd/blog/blob/master/2019-12-11%EF%BC%9AGithub%20Actions%20deploy%20Preactjs%20to%20Github%20Pages.md)

I was unable to deploy preact to github pages through the library gh-pages and running npm run deploy. The issue being the resources are loaded from https://junwei-wong.github.io directly instead of https://junwei-wong.github.io/tic-tac-toe/ after deploying. 

## Features

* Another tic-tac-toe game clone
* Undo button to erase the last move if game hasn't ended
* Reset button to erase all moves

## Links

- Project homepage: https://junwei-wong.github.io/tic-tac-toe/
- Repository: https://github.com/junwei-wong/tic-tac-toe
- Issue tracker: https://github.com/junwei-wong/tic-tac-toe/issues

## Licensing

This project is licensed under Unlicense license. This license does not require you to take the license with you to your project.


