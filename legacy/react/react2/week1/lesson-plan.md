# Lesson Plan

## Advanced Routing 2.1 Lecture (40 minutes)

### Server-Side Rendering (SSR) and Static Site Generation (SSG) (10 minutes)

- **Explanation of SSR and SSG**

  - Define Server-Side Rendering (SSR) and Static Site Generation (SSG)
  - Explain the benefits of SSR and SSG over client-side rendering

- **Use cases for SSR and SSG**
  - Discuss when to use SSR (dynamic data, personalization, etc.)
  - Discuss when to use SSG (static content, blogs, documentation, etc.)

### Introduction to Next.js App Router (15 minutes)

- **Overview of Next.js routing system**

  - File-based routing system in Next.js
  - Dynamic Routes
  - Mention the Next.js Link Component & why it is used

- **Advantages over traditional client-side routing**
  - Improved performance with built-in server-side rendering and static site generation
  - Simplified routing configuration
  - Nested layouts and nested routes

### Next.js Router Hooks (15 minutes)

- **Understanding the usePathname hook**

  - Explain the purpose of the `usePathname` hook
  - Demonstrate how to use `usePathname` to access the current path

- **Understanding the useSearchParams hook**

  - Explain the purpose of the `useSearchParams` hook
  - Demonstrate how to use `useSearchParams` to access the query strings

- **Working with the useRouter hook**
  - Discuss the need for redirects in web applications (authentication, URL changes, etc.)
  - Introduce the `useRouter` hook
  - Explain how to access various router properties (push, replace, etc.)
  - Demonstrate programmatic navigation using `router.push` and `router.replace`

## Advanced Routing 2.1 Exercises (45 minutes)

### 1. Create a page that renders the NASA Astronomy Picture of the Day (with caption) using Server Side Rendering (10 minutes)

- Use the [NASA API](https://api.nasa.gov/#MarsPhotos) to fetch the Astronomy Picture of the Day data
- Implement [data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) to fetch the data during the render
- Render the fetched image and caption on the page

### 2. Dynamic Rendering with useEffect (15 minutes)

- **Create a component that fetches NASA Mars Rover Photos from an API (with caption)**

  - Use the [NASA API](https://api.nasa.gov/#MarsPhotos) to fetch Mars Rover photos
  - Implement [client-side data fetching](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering) using the `useEffect` hook

- **Use useEffect to fetch data on component mount**

  - Fetch the data when the component mounts
  - Handle component unmount and dependency updates

- **Render fetched data in the component**
  - Display the fetched photos and captions in the component

### 3. Routing and Navigation Exercise (10 minutes)

- **Create a blog website with dynamic routes to different blog posts**

  - Create a route /blogs that displays blogs
  - Create a dynamic route for a blog post that displays the title from the route. For example, `/blogs/my-new-post` should dynamically display "My New Post".
  - Hint: Check out the [documentation](https://nextjs.org/docs/app/api-reference/functions/use-pathname) for `usePathName`.

- **Create a page that displays a NASA EPIC image on a different date depending on a query string parameter received**
  - Use the [NASA API](https://api.nasa.gov/#EPIC) to fetch EPIC images
  - Access the query string parameter using `useSearchParams`
  - Fetch and display the EPIC image for the specified date

## Advanced Components 2.1 Lecture (30 minutes)

### Using Refs in React (10 minutes)

- **What are refs and their use cases?**

  - Explain the purpose of refs in React
  - Discuss common use cases for refs (focus management, integration with third-party libraries, etc.)

- **Creating refs with useRef hook**

  - Introduce the `useRef` hook
  - Demonstrate how to create a ref using `useRef`

- **Accessing DOM elements with refs**

  - Show how to access and manipulate DOM elements using refs

- **Handling focus, text selection, and media playback using refs**
  - Provide examples of using refs for focus management, text selection, and media playback

### Component Libraries (20 minutes)

- **What are component libraries?**

  - Explain the concept of component libraries
  - Discuss the benefits of using component libraries

- **Benefits of using component libraries**

  - Consistency: Consistent design and branding across the application
  - Reusability: Reusable components for faster development
  - Accessibility: Built-in accessibility features

- **Popular component library (Material-UI)**

  - Introduce Material-UI as a popular React component library
  - Showcase some commonly used Material-UI components

- **How to install and use a component library**
  - Demonstrate how to install Material-UI in a Next.js application
  - Show how to import and use Material-UI components

## Advanced Components 2.1 Exercises (30 minutes)

### 4. Build a Responsive Navbar with links to various pages (15 minutes)

- **Use a component library (Material-UI) to create a responsive navbar**

  - Import and use the necessary Material-UI components
  - Implement a responsive navbar with a hamburger menu for smaller screens

- **Implement dynamic rendering to show/hide menu items based on screen size**

  - Use conditional rendering to show/hide menu items based on the screen size

- **When a user clicks on an item, navigate them to the relevant page with a router or link**
  - Use the `useRouter` hook to handle navigation or a `Link` component
  - Implement redirects when a link is clicked

### 5. Create a Form with Focus Management (15 minutes)

- **Build a sign up form**

  - Create a sign-up form with first name, last name, email and phone number fields.
  - Use Material-UI where possible for certain components (_not recommended for the input fields_)

- **Use refs to manage focus on input fields**

  - Notice if MUI is used for the inputs the fact that the ref prop is called [inputRef](https://mui.com/material-ui/api/input/) in MUI
  - Create refs for the input fields using the `useRef` hook
  - Implement focus management using refs (e.g., focus on the next field after entering data)

- **Implement form validation and highlight invalid fields**

  - Add form validation logic
  - Highlight invalid input fields using styles or Material-UI components

- **Redirect the user to the home page after form gets submitted**
- Add an event listener for form submit
- Once the user clicks it redirect them to a different page using the router.
