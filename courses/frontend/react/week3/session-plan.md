# Session Plan

## Forms / Event Handling

### DOM Event Handlers in React

- Setting event handlers directly onto elements (e.g. `onClick` instead of `element.addEventListener("click", …)`)
- Overview of event handlers exposed by React

### Managing Forms

- Adding a form and adding inputs to the form
- Submitting forms with `onSubmit`
- Performing input validation in JavaScript (in addition to HTML input validation, and server-side input validation)

## Hooks

### Introduction to Hooks

- You already know one hook! -> `useState`
- Rules of Hooks (don't wrap in `if` statements, use dependency array)
- Hooks run on every render, unless they have dependencies
- Hooks run when dependencies change

### How to use `useEffect`

- Usage of `useEffect`
- Dependencies of `useEffect`
- Use `useEffect` for synchronization (with external systems)
- Returning a cleanup function from `useEffect`

## Loading Data

### Connecting to APIs

- Calling async APIs using `fetch`, within `useEffect`
- Implementing initial data loading, showing a spinner

## Exercises

### Handling User Input & Events

#### 1. Create a ClickCounter component

1. Create a new component called `ClickCounter`
2. Use the `useState` hook to manage a `count` state variable
3. Implement an `onClick` event handler function that increments the `count`
4. Render a button and display the current value of `count`

#### 2. Build a SimpleForm component

1. Create a new component called `SimpleForm`
2. Use the `useState` hook to manage the state of form inputs
3. Create input fields for the form (e.g., name, email, message)
4. Implement a `handleSubmit` function to handle form submission
5. Render the form inputs and a submit button

#### 3. Develop a TodoList component

1. Create a new component called `TodoList`
2. Use the `useState` hook to manage an array of todo items
3. Implement a function to add a new todo item to the array
4. Implement a function to remove a todo item from the array
5. Render a list of todo items using the `.map` method, ensuring each item has a unique `key` prop
6. Render an input field to add new todos and buttons/functionality to remove todos

### Practice Using `useEffect`

#### 4. Create a Clock component

1. Create a new component called `Clock`
2. Use the `useState` hook to manage the current time
3. Use the `useEffect` hook to set up an `Interval` that updates the time every second
4. Implement the cleanup function in `useEffect` to clear the interval when the component unmounts
5. Let the component render the current time

#### 5. Build a DataFetcher component

1. Create a new component called `DataFetcher`
2. Use the `useState` hook to manage the data, loading, and error states
3. Use the `useEffect` hook to fetch data from a public API when the component mounts
4. Implement loading and error states in the component's JSX
5. Render the fetched data when it's available

#### 6. Develop a WindowResizer component

1. Create a new component called `WindowResizer`
2. Use the `useState` hook to manage the window size
3. Use the `useEffect` hook to set up an event listener for the `resize` event
4. Update the window size state whenever the `resize` event is triggered
5. Implement the cleanup function in `useEffect` to remove the event listener when the component unmounts
6. Render the current window size in the component
