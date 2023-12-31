# React 16 Tooling


1. Creating a personalized React development ecosystem
   - What's included with React Components that compare render trees
     - Two core React packages
       - React (Render Tree or VirtualDOM)
       - react-dom
   - Introducing tooling
     - Ancillary tasks outside of React
       - It's easier to deploy apps that depend on a simple library instead of a framework where all batteries are included
       - It's easier to think about application development when you have tools that stay out of the way for the most part
     - A construction site analogy
   - React tooling covered in this book
     - JSX needs to be compiled into Javascript (**[Babel](https://babeljs.io/docs/)**)
     - Newer Javascript language features need to be transpired (Babel is compatible with ECMAScript)
     - How module loading enables application development (**[HMR](https://webpack.js.org/guides/hot-module-replacement/)**: Hot Module Replacement from Webpack)
     - Running unit tests automatically (**[Jest](https://jestjs.io/docs/getting-started)**)
     - Thinking about the type-safety (**[React Flow](https://flow.org/en/docs/getting-started/)**)(TypeScript)
     - Linting for code quality (**[ESLint](https://eslint.org/docs/latest/)**)([Airbnb's standard](https://github.com/airbnb/javascript))
     - Isolating component development environments (**[Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)**)
     - Providing a browser-based debugging environment (**[Browser Developer Tools](https://developer.chrome.com/docs/devtools/)**)
     - Deploying React applications (DevOps Pipeline)(**Docker**)
   - Choosing the right tools
     - Essential tools
     - Optional tools
2. Efficiently bootstrapping React application with Create React App (**[create-react-app](https://create-react-app.dev/docs/getting-started)**)
3. Development mode and mastering hot reloading (**[react-scripts](https://create-react-app.dev/docs/available-scripts) package**)
   - Starting the development server
   - Webpack configuration
     - Entry points
     - Build output
     - Resolving input files
     - Loading and compiling files
     - Configuring plugins
     - Hot reloading
   - Hot component reloading in action(**[React Hot Loader](https://github.com/gaearon/react-hot-loader)**)(React-Hot-Loader is expected to be replaced by **React Fast Refresh**.)
   - Ejecting from Create React App ([npm run eject](https://create-react-app.dev/docs/available-scripts/))([Everything you need to know about react-scripts](https://blog.logrocket.com/everything-you-need-know-about-react-scripts/))
4. Optimizing Test-Driven React Development ([Jest](https://jestjs.io/docs/getting-started))
   - The driving philosophy of Jest
     - Mock everything except the application code
     - Isolating test and run in parallel
       - Testing should feel natural
   - Running Tests
     - Running tests using react-scripts
     - Running tests using standalone Jest
   - Writing Jest tests
     - Organizing tests using suites
     - Basic Assertions
       - Basic equality
       - Approximate equality
       - Value equality
       - Values in collections
       - Working with mocks
       - Asynchronous assertions
       - React Component snapshots
     - Unit test coverage
5. Streamlining development and refactoring with Type-Safe React components ([React Flow](https://flow.org/en/docs/getting-started/))
   - What does type-safety solve?
     - Replacing guesswork with assurance
     - Removing runtime checks
     - Obvious low-severity bugs
   - Installing and initializing Flow
   - Validating component properties and state
     - Primitive property values
     - Object property values
     - Validating component state
     - Function property values
     - Enforcing child component types
       - Parents with specific children types
       - Parents with one child
       - Parents with an optional child
       - Parents with primitive child values
     - Validating event handler functions
     - Bringing Flow into the development server
     - Bringing Flow into your editor
6. Enforcing code quality to improve maintainability ([ESLint](https://eslint.org/docs/latest/))
   - Installing and configuring ESLint
   - Building on Airbnb standards ([Airbnb's standard](https://github.com/airbnb/javascript))
   - Adding React plugins to ESLint
   - Using ESLint with create-react-app
   - Using ESLint in a code editor
   - Automating code formatting with Prettier ([Prettier](https://prettier.io/docs/en/index.html))
7. Isolating components with Storybook ([Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/))
   - The need for isolated component development([JSFiddle](https://jsfiddle.net), [JSBin](https://jsbin.com))
   - Installing and configuring Storybook
   - Developing components with stories
     - Experimenting with props
     - Experimenting with actions
     - Linking stories together
     - Stories as documentation
   - Building static Storybook apps
8. Debugging Components in the Browser ([Browser Developer Tools](https://developer.chrome.com/docs/devtools/))
   - Installing the React Developer Tools add-on
   - Working with React elements in React Developer Tools
     - Selecting React elements
     - Searching for React elements
   - Inspecting component properties and state
   - Manipulating element state values
   - Profiling component performance
     - Removing reconciliation work
     - Finding CPU-intensive components
9.  Instrumenting application state with [Redux](https://redux.js.org/introduction/getting-started)
    - Building a Redux app
      - The App component and state
      - The Home component and state
      - The NewBook component and state
      - The API abstraction
      - Putting it all together
    - Installing [Redux DevTools](https://github.com/reduxjs/redux-devtools)
    - Selecting and examining actions
      - Action data
      - Action state trees and charts
      - Action state diffs
    - Time travel debugging
    - Manually triggering actions
    - Exporting and importing state
10. Building and Deploying Static React Sites with Gatsby
11. Building and Deploying React Applications with Docker Containers
    - Building a messaging app
      - Starting Barely SMS
      - Logging in
      - The home page
      - The contracts page
      - The messages page
      - Sending a message
      - The API
    - Getting started with Node containers
    - Composing React apps with services
    - Static React builds for production