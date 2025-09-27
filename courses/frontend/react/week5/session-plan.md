# Session Plan

## Next.js

### Why Next.js?

- Purpose of Next.js

### Server-Side Rendering (SSR) and Static Site Generation (SSG)

#### Explanation of SSR and SSG

- Define Server-Side Rendering (SSR) and Static Site Generation (SSG)
- Explain the benefits of SSR and SSG over client-side rendering

#### Use cases for SSR and SSG

- Discuss when to use SSR (dynamic data, personalization, etc.)
- Discuss when to use SSG (static content, blogs, documentation, etc.)

### When to Use Client vs. Server Components?

- Explain how Next.js distinguishes client and server components
- Illustrate how these fit into the SSR and SSG concepts

### Introduction to Next.js App Router

#### Overview of Next.js routing system

- File-based routing system in Next.js
- Dynamic Routes
- Mention the Next.js Link Component & why it is used

#### Advantages over traditional client-side routing

- Improved performance with built-in server-side rendering and static site generation
- Simplified routing configuration
- Nested layouts and nested routes

### Basic Next.js Routing

- Explanation of routes
- Creating subfolders in `app` directory with `page.jsx` file.
- Create a component that defines a page

### Next.js Router Hooks

#### Understanding the `useParams` Hook

- Explain the purpose of the `useParams` hook
- Discuss how to use the `[]` bracket notation to mark params in a folder/filename
- Demonstrate how to use `useParams` to access the params of the current path

#### Understanding the `useSearchParam` Hook

- Explain the purpose of the `useSearchParams` hook
- Demonstrate how to use `useSearchParams` to access the query strings

#### Working With the `useRouter` Hook

- Introduce the `<Link>` component for most links
- Discuss the need for redirects in web applications (authentication, URL changes, etc.)
- Introduce the `useRouter` hook
- Explain how to access various router properties (push, replace, etc.)
- Demonstrate programmatic navigation using `router.push` and `router.replace`

### Optional Advanced: Server Functions (or Server Actions) & API Routes

TODO: …

## Vercel

### Introducing Vercel & Good Use Cases

TODO: …

### Connecting a GitHub Repository With Vercel

TODO: …

### Limitations of Vercel

TODO: …

## Exercises

### 1. Installing Next.js and Getting Started

- Create a new app using `npx create-next-app@latest --javascript`, accepting defaults
- When in doubt about the option prompts, refer to [the installation guide](https://nextjs.org/docs/app/getting-started/installation)
- Explore the folder structure created and research elements you don't understand
- Run the app using `npm run dev`

### 2. Create a Page That Renders the NASA Astronomy Picture of the Day (With Caption) using Server Side Rendering

- Use the [NASA API](https://api.nasa.gov/#MarsPhotos) to fetch the Astronomy Picture of the Day data
- Implement [data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) to fetch the data during the render
- Render the fetched image and caption on the page

### 3. Dynamic Rendering With `useEffect`

#### Create a component that fetches NASA Mars Rover Photos from an API (with caption)

- Use the [NASA API](https://api.nasa.gov/#MarsPhotos) to fetch Mars Rover photos
- Implement [client-side data fetching](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering) using the `useEffect` hook

#### Use `useEffect` to Fetch Data on Component Mount

- Fetch the data when the component mounts
- Handle component unmount and dependency updates

#### Render Fetched Data in the Component

- Display the fetched photos and captions in the component

### 4. Routing and Navigation Exercise

#### Create a Blog Website With Dynamic Routes to Different Blog Posts

- Create a route `/blogs` that displays blogs
- Create a dynamic route for a blog post that displays the title from the route. For example, `/blogs/my-new-post` should dynamically display "My New Post".
- Hint: Check out the [documentation](https://nextjs.org/docs/app/api-reference/functions/use-params) for `useParams`.

#### Create a Page That Displays a NASA EPIC Image on a Different Date Depending on a Query String Parameter Received

- Use the [NASA API](https://api.nasa.gov/#EPIC) to fetch EPIC images
- Access the query string parameter using `useSearchParams`
- Fetch and display the EPIC image for the specified date

### 5. Client vs. Server Exercise

- Create a component that renders 10 articles from a JSON array
- You may use Generative AI to create **only** these articles, or use example text (search for "Lorem Ipsum generator")
- Create a page that renders the 10 articles on the server
- Create a page that renders the 10 articles on the client
- Use your browser's performance panel to measure the performance of both versions
  - Example: [Chrome Performance Tab](https://developer.chrome.com/docs/devtools/performance/overview)
- Document the two performance results and potential differences

#### Docs

- [Next.js Docs on Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)

### 6. Server Functions (or Server Actions) & API Routes Exercise

#### Server Functions (or Server Actions)

- Create a server action that `console.log`s the current time when it is triggered
- Create a page with a button that triggers the server action
- Observe the Next.js console (not your browser console) after you've clicked the button
- Does it show the time?
- [Refer to the docs when in doubt](https://nextjs.org/docs/app/getting-started/updating-data#creating-server-functions)

#### API Routes

- Create a Hello World API route at `/api/hello` that returns the following JSON

```json
[
  {
    "type": "cat",
    "message": "purr"
  },
  {
    "type": "computer",
    "message": "Hello World"
  }
]
```
