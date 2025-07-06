# Lesson Plan

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
	- Great choice for design systems, i.e. making components once and using them for all your (future) applications, across different devices
	- There's a vast library of components already out there on [npm](npmjs.com) and a big community of developers using it today
- React's weaknesses:
	- May introduce too much overhead to small projects
	- It's an abstraction – can be misused and slow down your page
	- Need to learn JSX, hooks and other concepts

## JSX Fundamentals

- You _always_ have to return JSX from a component for it to work
- Returning JSX works like this

```jsx
function MyComponent() {
	return <h1>Hello World</h1>
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
	return <React.Fragment>
		<h1>Hello World</h1>
		<h2>Hello Universe</h2>
	</React.Fragment>
}
```

– _or_ –

```jsx
function MyComponent() {
	return <>
		<h1>Hello World</h1>
		<h2>Hello Universe</h2>
	</>
}
```

- JSX is really a **templating language**, enabling you to use JavaScript while generating HTML (kind of)
- You put JavaScript in `{}` curly braces

```jsx
function MyComponent() {
	const firstName = "HackYour"
	return <h1>Hello {firstName + 'Future'}</h1>
}
```

- This mechanism also allows you to "render" conditionally, showing different content based on conditions you define
- Redering is a fancy term for putting the HTML in the DOM that you describe in JSX, i.e. showing the component on the page

```jsx
function MyComponent() {
	const isSunday = (new Date()).getDay() === 7
	return <>
		<h1>Hello!</h1>
		{isSunday ? <h1>What a nice Sunday!</h1> : null}
	</>
}
```

## Components, props and CSS imports

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

### Use {} to execute JS inside JSX

- Embedding Expressions in JSX
- Conditional Rendering

### Setting attributes

- HTML attributes
- className

### Importing / exporting .jsx

- default exports and named exports

### Importing .css

- Global styles vs. component-specific styles
- CSS modules using Vite

## Exercises

### 1. Setting up a new React project

TODO: Add exercise

### 2. Writing static components

TODO: Add exercise

### 3. Nesting components

TODO: Add exercise

### 4. Executing JavaScript in JSX

TODO: Add exercise

### 5. Setting properties such as className and value 

TODO: Add exercise

### 6. Adding basic styling

TODO: Add exercise

### (Bonus) Create a simple component structure

TODO: Add exercise