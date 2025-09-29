# Session Plan

## Props

### Building Components & Using Props

- What are props and why are they used?
- Props as a way to make components flexible and re-usable
- Why prop values should never be changed within components (one-way data flow)
- How to pass props to components
- Reading props using `props.x` syntax
- Reading props using destructing syntax
- Forwarding props using spread syntax

### Using Children Props

- What are children props?
- Creating wrapper components

### Conditional Rendering Based on Props

- Conditional rendering using if/else
- Conditional rendering using ternary operator `(<condition> ? <then> : <else>)`
- Conditional rendering using a boolean expression `<condition> && <then>`

## State & Conditional Rendering

### Introduction to State

- What is State and when to use it
- Differences between Props and State

### `useState` Hook Syntax

- Introduction to React hooks
- How to declare and use State with `useState`

### Updating State

- Updating State consisting of arrays
- Updating State consisting of an object

### React Rendering Triggers

- What causes React to re-render components
- Using an update function for multiple State changes following after each other

### Dynamically Rendering Content Based on State

- Conditional rendering using if/else
- Conditional rendering using ternary operator `(<condition> ? <then> : <else>)`
- Conditional rendering using a boolean expression `<condition> && <then>`

### Rendering Many Components

- Rendering multiple items using `.map()`

### Sharing State Between Components

- Lifting state up to the parent

## Exercises

### Exercises Part 1

#### 1. Create a Re-usable `Button` Component

1. Create a new component called `Button`
2. Accept `text` and `onClick` as props
3. Render a `<button>` element with the `text` prop as its content
4. Attach the `onClick` prop to the button's `onClick` event handler

#### 2. Create a Card Component

1. Create a new component called `Card`
2. Accept `title`, `description`, and `imageUrl` as props
3. Use destructuring to extract the props
4. Render a card-like structure with the provided `title`, `description`, and `imageUrl`

#### 3. Create a Layout Component

1. Create a new component called `Layout`
2. Accept `children` as a prop
3. Render a layout structure (e.g. `header`, `main` content area, `footer`) with the `children` prop rendered inside the main content area
4. Pass children by adding them in between the tags of the parent component

#### 4. Implement Conditional Rendering

1. Create a new component called `ToggleContent`
2. Accept a `show` prop as a boolean value
3. Accept `content` as a prop, which can be a string or a React element
4. Render the `content` prop only if the `show` prop is true, otherwise render a message

### Exercises Part 2

#### 5. Create a Counter Component

1. Create a new component called `Counter`
2. Use the `useState` hook to manage a count state variable
3. Implement functions to increment (count up) and decrement (count down) the count
4. Render the current count value and buttons to call the increment and decrement functions

#### 6. Develop a Form Component

1. Create a new component called `Form`
2. Use the `useState` hook to manage the state of form input fields
3. Implement a function to handle form submission, you may want to use `onSubmit` in combination with a `<button type="submit">`
4. Render a form, input fields for each form field and the mentioned submit button

#### 7. Create a ParentChild Component Set

1. Create a new component called `Parent`
2. Create another component called `Child`
3. In the `Parent` component, use the `useState` hook to manage a state variable
4. Implement a function to update the state variable
5. Render the `Child` component and pass the state variable and the update function as props
6. In the `Child` component, render the data received from the parent and a button to call the update function that changes the state
