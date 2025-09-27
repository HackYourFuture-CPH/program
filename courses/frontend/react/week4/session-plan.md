# Session Plan

## React Context

### What is the Context API?

- Explain the purpose of the Context API in React
- Discuss the problems it solves (prop drilling, global state management)
- Set the context (pun intended) of
  - prop drilling being okay until it becomes too hard to maintain
  - extracting components and passing them as JSX being a valid approach as well

### When to use the Context API?

- Provide guidelines on when to use the Context API
- Discuss scenarios where Context API is useful (theming, localization, authentication, etc.)
- Examples:
  - Theming
  - Current account
  - Routing
  - Managing state

### Setting up a Context

- Demonstrate how to create a new Context using the `createContext` function
- Explain the purpose of the default value in `createContext`

```jsx
// AppPage.jsx
export const UserSettingsContext = createContext();
```

### Creating a Context Provider

- Explain that this step is optional (you can also update the context value in the main component)
- Show how to create a Context Provider component
- Discuss the role of the Provider in providing context values

### Providing the value to Context

- Demonstrate how to provide context values using the `value` prop of the Provider

```jsx
// AppPage.jsx
export function AppPage() {
  const [userLanguage, setUserLanguge] = useState("en");

  return (
    <UserSettingsContext
      value={{
        settings: { language: userLanguage, setUserLanguage: setUserLanguage },
      }}
    >
      <App />
    </UserSettingsContext>
  );
}
```

### Use the value in another component

```jsx
// Profile.jsx
export function Profile() {
  const { userLanguage, setUserLanguage } = useContext(UserSettingsContext);

  return (
    <section>
      <h2>My Language</h2>
      <input value={userLanguage} onChange={setUserLanguage} />
    </section>
  );
}
```

### In summary: The Context recipe

1. Create a Context
2. Wrap App in Context
3. Access value with useContext

---

## Routing

[React.dev recommends to use React Router](https://react.dev/learn/build-a-react-app-from-scratch#routing) for apps that don't want to use a framework like Next.js, so that's what we're going to do here

### React Router

- As of writing, React Router supports 3 modes: Framework, Data and Declarative
- Declarative mode seems to be the least flexible, but easier to understand for beginners

### Setup

- [Installing React Router](https://reactrouter.com/start/declarative/installation) as a dependency to your project
- Refer to [the Getting Started Example](https://reactrouter.com/start/declarative/routing) in the docs
  - Refactor your `main.jsx` to only return the `<BrowserRouter>`, the `<Routes>` and one `<Route>` component
  - Your `<App>` should now be the component that gets rendered for the one `<Route>`

### Setting Up Routes

- To add routes, we can add more `<Route>` components as children of the `<Routes>` component
- We should experiment with showing different components under different routes to demonstrate how the Router works

### Navigating

- Instead of using default anchors, Routers often use a special component for routing
- React Router [uses the `<NavLink>` for navigation](https://reactrouter.com/start/declarative/navigating) (which renders to a regular `<a>` tag, with some extra events attached)
- This allows React Router to do client-side routing, without refreshing the page

---

## Component Libraries & UI Libraries

### What are Component Libraries?

- A collection of React components, ready to go
- Some libraries come with extensive (and opinionated) styling (e.g. MaterialUI)
- Some libraries only provide the components somewhat unstyled (e.g. RadixUI)

### Benefits of Using a Component Library

- Consistency: Consistent design and branding across the application
- Reusability: Reusable components for faster development
- Accessibility: Built-in accessibility features

### Challenges When Using a Component Library

- Learning curve: Every library works differently, as they differ in component names, prop names, other APIs and capabilities
- Lock-in effect: It's often inefficient to combine multiple libraries, so you're stuck with the one you chose, unless you refactor your entire app

---

## Exercises

### Practice Implementing React Context

### 1. Exercises on React.dev website

There's an interesting exercise on the official React Docs. They call their exercises "challenges". You'll be able to solve it inline, directly on the page. Or you can convert it to a CodeSandbox (where you may need to create an account or use GitHub to log in).

Note: As you may find out yourselves, one solution is available for each challenge. Make sure to only reveal the solution once you have created your own, otherwise you won't have anything to compare, and you won't learn anything.

- Go to [React.dev](https://react.dev)
- Open the search feature of the website and type "deeply context" to find the chapter titled "Passing data deeply with Context"
- Scroll to the very bottom to find the ["challenge"](https://react.dev/learn/passing-data-deeply-with-context#challenges) for this chapter

### 2. Implementing a Theme Context

#### Implementing a theme context using our own context provider

- Create a context for managing the application theme
- Implement a context provider component to provide the theme value
- Use the context in a component to consume the theme value

#### Implementing a theme context using Material UI

- Explore the [Material-UI theme provider](https://mui.com/material-ui/customization/theming/) and theme consumer
- Implement a theme context using Material

### 3. Set up localization

#### Set up localization using Material UI

- Use the [localization component](https://mui.com/material-ui/guides/localization/) with the theme context
- Provide language data to the Context
- Consume and display the language in a component

### 4. Practice Routing

#### Create a Portfolio Page

- Create three page-components with some content of your choice (you may want to make it look good)
  - Home
  - About
  - Contact
- Each page-component can and should consist of smaller components that you can re-use in the other pages
- Use the `<BrowserRouter>` to make each page accessible under its own URL
  - `/`
  - `/about`
  - `/contact`
- Add links to navigate between the pages (perhaps in a navbar or menu)
