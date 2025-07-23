# Lesson Plan

## Contexts 2.2 Lecture (40 minutes)

### Introduction to Context API (10 minutes)

- **What is the Context API?**

  - Explain the purpose of the Context API in React
  - Discuss the problems it solves (prop drilling, global state management)

- **When to use Context API?**

  - Provide guidelines on when to use the Context API
  - Discuss scenarios where Context API is useful (theming, localization, authentication, etc.)

- **Benefits of using Context API**
  - Highlight the benefits of using the Context API
  - Discuss how it simplifies state management and component communication

### Creating a Context (15 minutes)

- **Setting up a Context**

  - Demonstrate how to create a new Context using the `createContext` function
  - Explain the purpose of the default value in `createContext`

- **Creating a Context Provider**

  - Show how to create a Context Provider component
  - Discuss the role of the Provider in providing context values

- **Providing value to Context**
  - Demonstrate how to provide context values using the `value` prop of the Provider

### Introduction to Reducers (15 minutes)

- **What is a Reducer?**

  - Explain the concept of a reducer function in React
  - Discuss the relationship between reducers and state management

- **Why use Reducers?**

  - Highlight the benefits of using reducers for state management
  - Discuss scenarios where reducers are useful (complex state updates, centralized state management)

- **Reducer syntax and structure**
  - Introduce the reducer function syntax (state, action) => newState
  - Explain the purpose of actions and action types
  - Demonstrate how to update state based on actions in a reducer

## Contexts 2.2 Exercises (30 minutes)

### 1. Implementing a Theme Context (15 minutes)

- **Implementing a theme context using our own context provider**

  - Create a context for managing the application theme
  - Implement a context provider component to provide the theme value
  - Use the context in a component to consume the theme value

- **Implementing a theme context using Material UI**
  - Explore the [Material-UI theme provider](https://mui.com/material-ui/customization/theming/) and theme consumer
  - Implement a theme context using Material

### 2. Set up localization (15 minutes)

- **Set up localization using Material UI**
- Use the [localization component](https://mui.com/material-ui/guides/localization/) with the theme context
- Provide language data to the Context
- Consume and display the language in a component

## Contexts with Reducers 2.2 Lecture (20 minutes)

### Combining Context and Reducers (20 minutes)

- **Passing Reducer dispatch function via Context**

  - Explain how to pass the dispatch function from the reducer to components via Context
  - Demonstrate how to create a context and provide the dispatch function as part of the context value

- **Updating state using the dispatch function**
  - Show how components can access the dispatch function from the context
  - Demonstrate how to dispatch actions to update the state using the reducer

## Contexts with Reducers 2.2 Exercises (30 minutes)

### 3. Build a CounterContext with Reducer (15 minutes)

- **Create a CounterContext**

  - Set up a new context for managing a counter state

- **Implement a Reducer for increment and decrement actions**

  - Define a reducer function to handle increment and decrement actions
  - Update the counter state based on the received actions

- **Consume the CounterContext and update the count**
  - Create a component that consumes the CounterContext
  - Implement buttons or UI elements to dispatch increment and decrement actions
  - Display the current count value from the context

### 4. Create a TodoContext with Reducer (15 minutes)

- **Set up a TodoContext with a Reducer**

  - Create a new context for managing a todo list state
  - Define a reducer function to handle actions related to todos (add, remove, toggle)

- **Implement actions for adding, removing, and toggling todos**

  - Define action types and action creators for adding, removing, and toggling todos
  - Update the todo list state based on the received actions in the reducer

- **Consume the TodoContext and display the todo list**

  - Create a component that consumes the TodoContext
  - Render the todo list using the state from the context

- **Use the TodoContext in a Next.js page**

  - Import and consume the TodoContext in a Next.js page component

- **Add functionality to add and remove todos**
  - Implement UI elements (input, buttons) to dispatch actions for adding and removing todos
  - Use the dispatch function from the context to update the todo list state
