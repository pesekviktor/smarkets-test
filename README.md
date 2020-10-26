# Smarkets test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deploy production build through docker
1. Run `yarn build` to create production build
1. Run Dockerfile and bind port 5000

Docker will copy built production and serve it, it will also act as a proxy for api request.

## Implementation notes
* Proxy is configured in package.json to redirect to smarket api and avoid cors in dev mode.
* Application is very much over-architected to show good code organization.
* Application uses redux to store state with saga middleware to handle requests
* Dynamic injectors for saga - handy in larger projects to inject saga on demand. Reducers can be injected too. See https://github.com/react-boilerplate/redux-injectors.
* For styling style-components are used. I did not spend much time on styling, it will not be mobile friendly.
* Webpack bundler is part of create react app scripts located in node_modules/react-scripts/config, did not create a specific one.
* There are comments in code where I did not follow through with implementation for test purpose
* Please see some tests in HomePage and App, more test would be expected for production


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn typecheck`

Runs typecheck

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
