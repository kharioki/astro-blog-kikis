---

title : Testing Library and why I use it
date : 2021-09-14
author : kharioki
image: {
  src: "/images/testing-library.jpg",
  alt: "testing-library"
}
description: A family of packages that help you test UI components in a user-centric way...
draft: false
category: TDD
---

The testing library is a family of packages that help you test UI components in a user-centric way.

> The more your test resembles the way your software is used, the more confidence they can give you.

### What problems does Testing Library solve?
- You want to write tests that tell you your components are working for users.
- You want your tests to avoid including implementation details so changes on components do not break your tests or slow down the team.

### So why pick Testing Library?
- The core library **Dom Testing Library** is a lightweight solution for testing pages by querying and interacting with DOM nodes.
- The main utilities it provides include querying the DOM for nodes in a way that's similar to how the user finds elements on the page.
- The core library has been wrapped to provide ergonomic APIs for several frameworks including React, Angular, Vue and also for React Native.

> DOM Testing Library works with any environment that provides DOM APIs such as Jest, Mocha + JSDOM or a real browser.

### What this library is not :(
- A test runner or framework - RTL is different from Jest(I'll explain later)
- Specific to a testing framework

### What should you avoid with Testing Library?
Avoid testing implementation details like:
1. Internal state of a component
2. Internal methods of a component
3. Lifecycle methods of a component
4. Child components

________________

> _for the sake of this write up, I'll introduce React Testing Library_

## React Testing Library(RTL)
React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components

> CRA projects have out-of-the-box support for RTL.
> You can also install it via `npm` or `yarn`
```npm install --save -dev @testing-library/react```

### Why do tests with React Testing Library?
- **Catch bugs** - allows you to catch bugs easily.
- **Increases confidence in application** - if all your tests pass, means all the parts of your applications are working correctly hence increasing the confidence in your application. This also translates to an increase customer satisfaction.
- **Speeds up QA time** - if we were running a huge application and we implement a new feature, we'd have to manually test. If we write tests then all we have to do is run tests.
- **Tests can serve as documentation** - if you're working with larger teams, sometimes code can be very confusing especially to new developers and by looking at tests, new devs can easily understand what the team is trying to accomplish.

### Types of Tests
> Before we continue, lets understand the different types of tests that there are.

1. **_Static tests_** - catch typos and type errors as you write code. Usually how a linter works e.g ESlint, TSlint
1. **_Unit tests_** - they test a piece of code/component in complete isolation. Basically testing a single unit works as expected.
2. **_Integration tests_** - test how different units/components interact.
3. **_E2E(End to End) tests_** - They simulate what the user flow would be like. It tests beginning to end.
> RTL does not test end to end. For that you can use **Puppeteer** or **Cypress**.

### Structure of Tests
To better understand tests, we need to know what goes into a test; _describe blocks_, _test blocks_, and _assertions_.

- **describe block** - is a test suite that specifies a larger component or function. A test suite can have multiple test cases.
![describe block](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4w2jv6qsgujaruawmja6.png)

- **test block** - (also called _it block_ since its defined by an `it` function) is a test case.
![it block](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/424k6zt6z39yjfd3vhur.png)

- **assertions** - assertions are basically what we put in the test block. They can be successful or erroneous. In the above example we use the `expect` function.
________
_before we continue, lets see how we run tests and how RTL works alongside jest_

If you're using create-react-app, React Testing Library and Jest come installed out-of-the-box. However if you're using another react framework or you've built your app with custom react and webpack configuration, you'll need to install jest and react testing library yourself.

Under the hood, jest test-runner will match all files with suffix `test.js` or `spec.js` or as per your own configuration.Jest then runs the tests in these files once you run the command `npm run test` or `yarn test` (again, or whatever test script you may have in your package.json)

> Like I mentioned earlier, **Jest** is a test-runner, which gives you ability to run tests with Jest in the command line. On the other hand **React Testing Library** is a testing library to test react components, just like _Enzyme_.

While Jest provides us with a whole lot of functions; test suites, test cases and assertions, RTL provides more functionality that is geared towards DOM testing for react components e.g render, screen, query methods, assertion methods, and many more.
__________
> To better understand this, lets use some of my code and see a real-life example.

![sample code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/apil3qim0g2u7bux3d7v.png)

Lets dive into the above test suite;
- **render** - inside the test suite we first render the component we want to test. We use `{ render }` method from `@testing-library/react`.

- **screen** - then we find the elements we want to interact with. Again we use `{ screen }` method from `@testing-library/react`.

- the next step is to interact with these elements.
- **assert** -  then we assert the results as expected. we use `expect()` method.

**Query methods**

> _okay now, lets look at some of those Query methods I mentioned earlier, some of which I have used in the figure above_

|       |getBy|findBy|queryBy|getAllBy|findAllBy|queryAllBy|
| ------|-----|------|-------|--------|---------|----------|
|0 match|error|error | null  | error  | error   | array    |
|1 match|return|return|return| array  | array   | array    |
|1+ match|error|error | error | array  | array   | array    |
|Await  | no  | yes  |  no   | no     | yes     | no       |

**_getBy_, _findBy_, and _queryBy_** - these methods get only one element. If they get more than one element, they throw an error.

**_getAllBy_, _findAllBy_, and _queryAllBy_** - Always return an array if they get multiple elements they return all elements.

**_findBy_, _findAllBy_** - we can use these methods if we are rendering items asynchronously.

**_queryBy_** - does not work with async, returns only one element and if no match it still passes.

**Prioritising attributes**

In react-testing library, we want to mimic the user interactions as much as possible inside of our tests.
- so we utilize the attributes that follow that e.g:

**Attributes accessible by everyone** - _getByRole_ (e.g. button, heading), _getByLabelText_, _getByPlaceholderText_, _getByText_.

**Semantic Queries attributes** - these are for when we have implemented certain a11y accessibility rules  - _getByAltText_, _getByTitle_

**Using TestID** - in react sometimes we may need to test a specific component that has a unique testId. in such instances we use _getByTestId_.


> This is already getting too long. I'll stop it here for now. I'll attach some links to certain articles that helped me prepare and improve my testing skills. 

[This cool article](https://www.robinwieruch.de/react-testing-library)
[This other article](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests)
[These official docs](https://testing-library.com/docs/react-testing-library/intro)
[This youtube playlist](https://youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

________
> That's all for now, till next time, have a great time testing your applications. One more thing before I go, here's a sample implementation of how I use Testing Library with react-native.

![rn code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fasx1v9962bqjd6bmokd.png)
