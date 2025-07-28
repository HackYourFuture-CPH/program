# Session Plan

## Introduction to React

- Vanilla JavaScript
  - interacts directly with the DOM
  - this is fairly easy to maintain for small apps and sites – and if it's _just you_ developing it
- React
  - can enable you to add a bunch of other people to help you and collaborate to move faster
  - can help you avoid repetition that's natural when interacting with the DOM a lot
  - can update the UI in a reactive way (hence the name) when your data changes
  - makes it possible to compose an application or website of small components that you can re-use
- React's strengths:
  - Very suitable for working in teams and sharing those components (even publicly)
  - Great choice for design systems, i.e. making components once and using them for all your (future) applications,
    across different devices
  - There's a vast library of components already out there on [npm](https://npmjs.com) and a big community of developers
    using
    it today
- React's weaknesses:
  - May introduce too much overhead to small projects
  - It's an abstraction – can be misused and slow down your page
  - Need to learn JSX, hooks and other concepts

## JSX Fundamentals

- You _always_ have to return JSX from a component for it to work
- Returning JSX works like this

```jsx
function MyComponent() {
  return <h1>Hello World</h1>;
}
```

- JSX looks a bit like HTML, and you need to use HTML elements to build components
- But JSX has some extra rules compared to plain HTML
- For example, you always have to return a single root element, that's a fixed requirement

```jsx
// ⚠️ THIS WON'T WORK
function MyBrokenComponent() {
  return (
    <h1>Hello World</h1>
  <h2>Hello Universe</h2>
)
}
```

- You can use Fragments to address this issue

```jsx
function MyComponent() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <h2>Hello Universe</h2>
    </React.Fragment>
  );
}
```

– _or_ –

```jsx
function MyComponent() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello Universe</h2>
    </>
  );
}
```

- JSX is really a **templating language**, enabling you to use JavaScript while generating HTML (kind of)
- You put JavaScript in `{}` curly braces

```jsx
function MyComponent() {
  const firstName = "HackYour";
  return <h1>Hello {firstName + "Future"}</h1>;
}
```

- This mechanism also allows you to "render" conditionally, showing different content based on conditions you define
- _Rendering_ is a fancy term for putting the HTML in the DOM that you describe in JSX, i.e. showing the component on the
  page

```jsx
function MyComponent() {
  const isSunday = new Date().getDay() === 7;
  return (
    <>
      <h1>Hello!</h1>
      {isSunday ? <h1>What a nice Sunday!</h1> : null}
    </>
  );
}
```

## Components & CSS imports

### Thinking in components

- What are components?
- Breaking down UI into reusable components
- Hierarchy and composition of components

### Writing your first static component

- Creating a Functional Component
- Returning JSX
  - Single Root Element Requirement
  - Fragments
- Using components inside components

### Use `{}` to execute JS inside JSX

- Embedding Expressions in JSX
- Conditional Rendering

### Setting attributes

- Standard HTML attributes
- `className`

### Importing / exporting .jsx

- default exports and named exports

### Importing .css

- Global styles vs. component-specific styles
- CSS modules using Vite

## Exercises

### 1. Setting up a new React project

- Point your terminal at the folder where you manage your projects, e.g. `cd ~/Sites`
- Scaffold a basic Vite React project by following the instructions
  in [the Vite Guide](https://vite.dev/guide/#scaffolding-your-first-vite-project)
  - At the time of writing this, you can get started by running the following command
    `npm create vite@latest hyf-frontend-react -- --template react`, where `hyf-frontend-react` is the project/folder
    name that the tool will create
  - Confirm with `y` + `Enter` that `npx` may run the create tool
- Open your IDE (probably VSCode) at the `hyf-frontend-react` folder (or alternative name you chose)
  - Run `npm install` in a terminal as requested above
  - Every time you start development, run `npm run dev`
- **Hints**
  - `Ctrl`/`Cmd` + click on the URL displayed in your terminal, it watches your files and updates automatically in your
    browser
  - The file you likely want to edit to follow the next exercises is `src/App.jsx`
  - When you add components, create a `src/components` folder and add a file per component

### 2. Writing static components

- Create a functional component called `Greeting` that returns an `h1` element with the text "Hello, React!"
- Create a functional component called `Card` that returns a `article` element with a nested `h2` element and a `p`
  element. The `h2` should display the text "Card Title", and the `p` should display the text "This is a card component"

### 3. Nesting components

- Create a functional component called `Cards` that renders two instances of the `Card` components from the previous
  exercise, potentially inside a `section` element

### 4. Executing JavaScript in JSX

- Create a functional component called `Person` containing two constants `name` and `age`. The component should display
  the text: `{name} is an adult` if the age is 18 or higher or `{name} is a minor` if the age is less than 18

### 5. Setting properties such as `className` and `placeholder`

- Create a functional component called `Button` that renders a `button` element with a `className` prop set to
  `btn primary`
- Create a functional component called `DangerButton` that renders a `button` element with a dangerous text and a
  `className` prop set to `btn danger`
- Create a functional component called `TextInput` that renders a text input field with a placeholder value
  `Type something here`
- Create a functional component called `ProfileImage` that renders an image of a person
- Add all the components above to your app

### 6. Adding basic styling

- Create a global CSS file that changes the color of all buttons to `blue`
- Add component styles for the `DangerButton` which makes it large and red

### (Bonus) Create a simple component structure

- Design a basic layout with `header`, `main` content, and `footer`
- Create separate components for each section
