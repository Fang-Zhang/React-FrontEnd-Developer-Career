# Learning React
## Modern Patterns for Developing Apps
[Source Code](https://github.com/MoonHighway/learning-react/tree/second-edition)

1. Welcome to React
   - A Strong Foundation
   - React's Past and Future
   - Working with the Files
     - File Repository
     - React Developer Tools
     - Installing Node.js
2. JavaScript for React
   - Declaring Variables
     - The const keyword
     - The let keyword [Differences of var/let/const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
     - Template Strings
   - Creating Functions
     - Function Declarations (Start with "function" keyword) (hoisted)
     - Function Expressions (Create a function as a variable)
     - Arrow Functions [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
       - Returning Objects
       - Arrow Function and Scrop
   - Compiling JavaScript
   - Objects and Arrays
     - Destructuring Objects
     - Destructuring Arrays
     - Object Literal Enhancement
     - The Spread Operator [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
   - Asynchronous JavaScript
     - Simple Promises with Fetch [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
     - Async/Await [Asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
     - Building Promises [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
   - Classes
   - ES6 Modules
     - CommonJS
3. Functional Programming with JavaScript
   - What It Means to Be Functional
   - Imperative (How) Versus Declarative (What) [React is declarative](https://egghead.io/blog/wtf-is-declarative-programming)
   - Functional Concepts
     - Immutability
     - Pure Functions
     - Data Transformations
     - Higher-Order Functions [Currying](https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/)
     - Recursion
     - Composition
     - Putting It All Together
4. How React Works
   - Page Setup
   - React Elements
   - ReactDOM
     - Children
   - React Components
     - React Components: A Historical Tour
5. React with JSX
   - React Elements as JSX
     - JSX Tips
     - Mapping Arrays with JSX
   - Babel
   - Recipes as JSX
   - React Fragments
   - Intro to webpack
     - Creating the Project
     - Loading the Bundle
     - Source Mapping
     - Create React App
6. React State Management
   - Building a Star Rating Component
   - The useState Hook
   - Refactoring for Advanced Reusability
   - State in Component Trees
     - Sending State Down a Component Tree
     - Sending Interactions Back up a Component Tree
   - Building Forms
     - Using Refs [useRef](https://react.dev/reference/react/useRef) [React-useRef](https://dmitripavlutin.com/react-useref/)
     - Controlled Components
     - Creating Custom Hooks
     - Adding Colors to State
   - React Context
     - Placing Colors in Context
     - Retrieving Colors with useContext
     - Stateful Context Providers
     - Custom Hooks with Context
7. Enhancing Components with Hooks
   - Introducing useEffect [useEffect](https://react.dev/reference/react/useEffect)
     - The Dependency Array 
     - Deep Checking Dependencies
     - When to useLayoutEffect [useLayout](https://react.dev/reference/react/useLayoutEffect)
     - Rules to Follow with Hooks
     - Improving Code with useReducer [useReducer](https://react.dev/reference/react/useReducer)
     - useReducer to Handle Complex State
     - Improving Component Performance [useMemo](https://react.dev/reference/react/useMemo) [useCallback](https://react.dev/reference/react/useCallback) [useMemo vs useCallback](https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60)
     - shouldComponentUpdate and PureComponent
     - When to Refactor
8. Incorporating Data
   - Requesting Data
     - Sending Data with a Request
     - Uploading Files with fetch
     - Authorized Requests
     - Saving Data Locally [Using localstorage](https://blog.logrocket.com/using-localstorage-react-hooks/) [useLocalstorage](https://usehooks.com/uselocalstorage)
     - Handling Promise States
   - Render Props
   - Virtualized Lists
     - Creating a Fetch Hook
     - Creating a Fetch Component
     - Handling Multiple Requests
     - Memozing Values
     - Waterfall Requests
     - Throttling the Network Speed
     - Parallel Rqquests
     - Waiting for Values
     - Canceling Requests
   - Introducing GraphQL
     - GitHub GraphQL API
     - Making a GraphQL Request
9.  Suspense
    - Error Boundaries
    - Code Splitting
      - Introducing: the Suspense Component
      - Using Suspense with Data
      - Throwing Promises
      - Building Suspenseful Data Sources
      - Fiber
10.  React Testing
    - ESLint [ESLint](https://eslint.org/docs/latest/use/getting-started)
      - ESLint Plug-Ins [ESLint-Plugin-React-Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) [ESLint-Plugin-JSX-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) [Awesome-ESLint](https://github.com/dustinspecker/awesome-eslint)
    - Prettier [Prettier](https://prettier.io/docs/en/index.html)
      - Configuring Prettier by Project 
      - Prettier in VSCode
    - Typechecking for React Applications
      - Prop-Types Library [prop-types](https://www.npmjs.com/package/prop-types)
      - Flow Library [Flow](https://www.npmjs.com/package/flow-bin) [Flow Config](https://flow.org/en/docs/config/)
      - TypeScript Language [TypeScript](https://www.typescriptlang.org/docs/) [CheatSheet](https://github.com/typescript-cheatsheets/react)
    - Test-Driven Development [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
      - TDD and Learning
    - Incorporating Jest [Jest](https://jestjs.io/)
      - Create React APP and Testing
    - Testing React Components
      - Queries
      - Testing Events
      - Using Code Coverage [Unit Test](https://martinfowler.com/bliki/UnitTest.html) [Test Coverage](https://martinfowler.com/bliki/TestCoverage.html)
11. React Router [React Router](https://reactrouter.com/en/main/start/overview)
    - Incorporating the Router
    - Router Properties
      - Nesting Routes
    - Using Redirects
      - Routing Parameters
12. React and the Server
    - Isomorphic Versus Universal
      - Client and Server Domains
    - Server Rendering React [CSR vs SSR](https://yudhajitadhikary.medium.com/client-side-rendering-vs-server-side-rendering-in-react-js-next-js-b74b909c7c51)
    - Server Rendering with Next.JS
    - Gatsby
    - React in the Funture


# React Library
## React Core
- React
- React-DOM
- React-Scripts
  - Webpack
  - Babel
  - ESLint

## UI library (Specific Component)
- [MUI](https://mui.com/)
- [Ant Design](https://ant.design/)
- [React Bootstrap](https://react-bootstrap.github.io/)

## Outside Tools
- Redux
- Router
- Jest
- Babel
- Webpack

# Design Patterns
- [React Patterns](https://reactpatterns.com/)
- [Overview of React](https://www.patterns.dev/posts/reactjs)
- [React Design Patterns](https://blog.logrocket.com/react-design-patterns/)
- [React Design Patterns 2](https://aglowiditsolutions.com/blog/react-design-patterns/)
- [React Patterns Video Tutorial](https://www.youtube.com/watch?v=iOSKV2rmj-A)

# How React Works
- [React Deep Dive](https://www.youtube.com/watch?v=7YhdqIR2Yzo&list=PLxRVWC-K96b0ktvhd16l3xA6gncuGP7gJ&index=1)
- [React Hooks](https://www.youtube.com/watch?v=IoNZLdvjRqE&list=PLxRVWC-K96b2KrTW6AqAE6vUXfOTnD-PS)
- [What's the React](https://www.hostinger.com/tutorials/what-is-react)
- [How React Work under the Hooks](https://www.freecodecamp.org/news/react-under-the-hood/)

# Next.js
- [Why Use Next.js](https://www.youtube.com/watch?v=zXjxpJOJ8QI&list=PLxRVWC-K96b3qWv0z8uDnOyINSsURJ-Rj)