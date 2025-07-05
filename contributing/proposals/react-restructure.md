# 📘 React & Next.js Module Restructuring Plan Proposal

## 🎯 Goal

The purpose of this restructuring is to enhance trainees' learning experience by clearly distinguishing foundational React concepts from the advanced features provided by Next.js. The current structure mixes fundamental and framework-specific topics, which has caused confusion and hindered deeper understanding. By separating these topics into two distinct, focused modules—one dedicated to mastering core React concepts and another specifically for exploring Next.js—we aim to improve comprehension, reinforce skills through targeted exercises, and ultimately empower trainees to confidently build real-world applications using modern development practices.

---

## ORIGINAL MODULE STRUCTURE

![draw io 2025-05-10 15 15 20](https://github.com/user-attachments/assets/1129af41-d894-422a-8b56-b7ef8fd42d07)
![draw io 2025-05-10 15 15 30](https://github.com/user-attachments/assets/b3cee13d-472e-4e47-ac66-689b3b840ee1)

## 🧱 PROPOSED MODULE STRUCTURE

### React Module (4 Weeks)

**Description:**
Covers everything essential about React and building React applications, including component lifecycle, state management, and routing. After completion, trainees should be able to create simple applications and websites using React

**Teaching Methodology:**

- **Flipped classroom:** With preparation materials, class sessions are dedicated to solving problems and practical implementation rather than theoretical explanations. \[From my experience, this amount of matherial might become 4-hours-lecture instead of 4-hours-practice]
- **Preparation Materials:** Improve beyond React documentation for effective flipped classroom learning.

**Technical Recommendations:**

- Use Vite or similar library for a client-only React setup to simplify configuration and focus more on React itself.

**Homework Strategy:**

- "Meal Sharing" project can be integrated progressively during the course, rather than post-module only.

![draw io 2025-05-10 15 15 50](https://github.com/user-attachments/assets/8c98a4ae-aeed-41d1-afc2-33667ff6bd44)

#### Weekly Goals and Topics

**Week 1:** Everything about rendering a single component.

- React Introduction
- JSX fundamentals
- Components, props, CSS imports

**Week 2:** Master state management (passing, storing, updating state).

- useState Hook
- Conditional rendering, dynamic rendering

**Week 3:** Component lifecycle, data management (events, API), and refs.

- Event handlers, form management
- useEffect Hook
- API integration

**Week 4:** Context, Routing, Libraries, handling real-world cases.

- React Context
- (Optional): Reducers (I haven’t seen it used in production a lot), advanced state management
- Component libraries (UI libraries)
- &#x20;Routing
- Introduction to easy deployment (Vercel)

---

### Next.js Module (1 Week)

**Description:** An advanced module specifically for Next.js and advanced topics it coveres: server-side rendering (SSR), static site generation (SSG), differentiating between client and server components. It clearly explains how Next.js solves problems previously encountered in React.

Since trainees has already seen most of fundamental concepts and how they solved in pure React (fx Routing), it should be easier to explain how Next.js solves it, without focusing on what it is in general.

**Teaching Methodology:**

- **Preparation Materials:** Use “Next.js” original introduction course.

![draw io 2025-05-10 15 16 06](https://github.com/user-attachments/assets/bece24ea-418c-436d-b6d3-89da91b631e4)

#### Topics

- Introduction to Next.js (why Next.js, recommended by React)
- SSR & SSG
- Next.js App Router
- When to use client vs server components
- Optional Advanced: Server Actions, API Routes

## Proposal discussion notes

Overall, I think we can accept this proposal with some noted (also added to the document).

Agreed on:

- Restucture itself: separate React and Next
- Fallback to Vite in React module -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087473349)
- We DO NOT introduce any state libraries -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087502733)
- We DO NOT introduce reducers -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2109923071) [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087489631)
- We DO NOT introduce UI Libraries, only mention that they're exist, so they can research is they want to -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2109923071)

Todo:

- Research and add more preparation materials -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087472475)
- Integrate MealSharing better with new structure: do it in React module, check that steps are coverting the lesson plan -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087483027)
- IF we introduce refs, we need to add good examples when they might be non-avoidable (fx timers) -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087521327)
- Add introction for any 1-click-deploy, fx Vercel -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087491241)
- Figure out an example with good example of server rendering -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087497199)

Up to a discussion:

- Which router to take with Vite? How we approach Routing now? -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2109832621)
- Should we cover render props? -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2109934479)
- Should we introduce refs? -- [Discussion](https://github.com/HackYourFuture-CPH/programme/pull/65/files#r2087521327)
- If we remove most of the content in week 4, we probably can move there everything we found as "not exactly fit with goal" for other weeks. Or use session for questions.
