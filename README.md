## Development

Before starting the project, make sure [Node.js](https://nodejs.org/) is installed globally. After that install the application dependencies:
```
npm install
```

In the project directory, you can run:
```
npm run start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Apollo Server

This project implements Apollo Client that talks to Apollo Server to query external data. Find out more on how to run CGR Portal Apollo Server [here](/apollo-server/README.md).

### Testing

```
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run coverage
```

Runs the tests once and reports the coverage.

### End-to-End Testing

```
npm run e2e
```

Runs the end-to-end test against defined features and scenarios.

### Build
```
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
