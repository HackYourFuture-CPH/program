# Session Plan

## Next.js

### Why Next.js?

TODO: …

### Server-Side Rendering (SSR) and Static Site Generation (SSG)

#### Explanation of SSR and SSG

- Define Server-Side Rendering (SSR) and Static Site Generation (SSG)
- Explain the benefits of SSR and SSG over client-side rendering

#### Use cases for SSR and SSG

- Discuss when to use SSR (dynamic data, personalization, etc.)
- Discuss when to use SSG (static content, blogs, documentation, etc.)

### Introduction to Next.js App Router

#### Overview of Next.js routing system

- File-based routing system in Next.js
- Dynamic Routes
- Mention the Next.js Link Component & why it is used

#### Advantages over traditional client-side routing

- Improved performance with built-in server-side rendering and static site generation
- Simplified routing configuration
- Nested layouts and nested routes

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

### When to Use Client vs. Server Components?

TODO: …

### Optional Advanced: Server Actions & API Routes

TODO: …

## Vercel

### Introducing Vercel & Good Use Cases

TODO: …

### Connecting a GitHub Repository With Vercel

TODO: …

### Limitations of Vercel

TODO: …

## Exercises

### 1. Installing Next.js And Getting Started

TODO: …

### 2. Create a page that renders the NASA Astronomy Picture of the Day (with caption) using Server Side Rendering

- Use the [NASA API](https://api.nasa.gov/#MarsPhotos) to fetch the Astronomy Picture of the Day data
- Implement [data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) to fetch the data during the render
- Render the fetched image and caption on the page

### 3. Dynamic Rendering with useEffect

#### Create a component that fetches NASA Mars Rover Photos from an API (with caption)

- Use the [NASA API](https://api.nasa.gov/#MarsPhotos) to fetch Mars Rover photos
- Implement [client-side data fetching](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering) using the `useEffect` hook

#### Use `useEffect` to fetch data on component mount

- Fetch the data when the component mounts
- Handle component unmount and dependency updates

#### Render fetched data in the component

- Display the fetched photos and captions in the component

### 4. Routing and Navigation Exercise

#### Create a blog website with dynamic routes to different blog posts

- Create a route `/blogs` that displays blogs
- Create a dynamic route for a blog post that displays the title from the route. For example, `/blogs/my-new-post` should dynamically display "My New Post".
- Hint: Check out the [documentation](https://nextjs.org/docs/app/api-reference/functions/use-params) for `useParams`.

#### Create a page that displays a NASA EPIC image on a different date depending on a query string parameter received

- Use the [NASA API](https://api.nasa.gov/#EPIC) to fetch EPIC images
- Access the query string parameter using `useSearchParams`
- Fetch and display the EPIC image for the specified date

### 5. Client vs. Server Exercise

TODO: …

### 6. Server Actions & API Routes Exercise

TODO: …
