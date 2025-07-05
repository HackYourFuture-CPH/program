# Lesson plan

- Introduction by everyone - you as Session Lead, the Session Assistant(s), the Trainees
- Integrated Development Environments (IDE) and Visual Studio as the standard out there
- Mix of HTML concepts intertwined with VS Code settings as "format on save" and "auto safe on focus change"
- Lots of session exercises
- Emphasize use of autocomplete and copy/paste
- Teach through raising questions and demonstrating how to search for the answers online
- Focus on how to read documentation, MDN - W3Schools, StackOverview - ChatGPT

---

## Visual Studio Code

You can either demonstrate the following tips all at once or integrate them throughout the session as appropriate. Remember, the primary focus of this session is HTML and CSS; the VS Code tips are intended to support and accelerate your workflow with these technologies.

- Demonstrate the basics
  - Switching between light and dark themes
  - Open and close different panels (Explorer, Search, Extensions, Terminal, Editor Layout)
  - How to load/drag folders and projects in
  - How to create files
- Recommend extensions (no need to explain all upon install)
  - Prettier - Code formatter
  - Live Server
  - Code Spell Checker
- Important User Settings
  - Auto save on focus change
  - Prettier on focus change
- Extra for the curious
  - Select multiple instances of a string on file `CMD + D`
  - Select and edit multiple lines `Option + Shift`
  - Demonstrate how to add dummy copy through `Lorem10` where the number is equal to the number of words

---

## HTML

What does it stand for? Emphasize that it's not a programming language. What role does it play in Web Development?

- Explain the document structure - head, body; what goes in the head, what in body (meta tags, styles, scripts)
- Demonstrate the advanced HTML document autocomplete command with `! + Tab`
- Block vs Inline elements
- Attributes (image tags, forms)
- Demonstrate the importance of predictable indentation, nesting, and formatting
- Demonstrate Emmet (Zen coding)
  - Example `ul>li\*6>a`
- Tables
- Forms (mention `<label>` tags `for` and `id` attributes)

### Exercise 0: "Hi, my name is..."

**Objective:** Practice identifying and using block-level vs inline-level elements, and understand their behaviour in layout.

**Instructions:** Create a simple "About Me" bio section using the following requirements:

- Add a header section with heading with your name and tag line of your profession
- Follow with a short paragraph introducing yourself or simply use `lorem50`
- Inside the paragraph, bold your profession and italicize your hobbies
- Create an unordered list of the last 3 movies you've watched
- Add another paragraph (`Lorem25`)
- Follow with an ordered list of the last 3 books you read
- Add an image inside of a container tag (use a placeholder as [PlaceBeer](https://placebeer.com/) or [PlaceCats](https://placecats.com/))
- Make sure the image has caption or `alt` tag
- Upload to [CodePen](https://codepen.io) and share with the team

Challenge Goal:

- Ensure that block elements stack vertically
- Use inline elements inside the paragraph and the image caption, showing they do not force line breaks
- Use proper indentation and nesting

### Exercise 1: Product Table

**Objective:** Practice using the various table tags and learn how to structure tabular data.

**Instructions:** Create a table to display a list of 3 fictional products. The table should include:

- Header rows with column titles for Product Name, Price, In Stock
- Three rows of product data (you can make up the names/prices)
- Use appropriate HTML tags: `table`, `thead`, `tbody`, `tr`, `th`, and `td`
- Caption reading "Available Products"
- Format the code with clean indentation

Bonus: Use Emmet to speed up creation

### Exercise 2: Create a Basic Contact Form

**Objective:** Practice using form-related tags, attributes (for, id, name, type, placeholder), and improve form semantics.
**Instructions:** Build a simple contact form that includes:

- A `<form>` tag with a submit button
- A field for "First Name"
- "Last Name"
- A dropdown field for "Title" or "Salutation" (Eg., "Mr", "Ms", "Mrs", "Miss", "Dr", "Sir")
- A field labelled "Email"
- Field labelled "Message"
- Enhanced accessibility through associated `<label>` fields with `<input>` fields by using `for` attributes
- Include placeholders for each input field
- Mark at least one field as `required`

Bonus: Use Emmet to scaffold quickly

### Exercise 3: Semantically speaking

**Objective:** Use semantic elements like `<header>`, `<main>`, `<section>`, `<aside>`, and `<footer>` to structure a simple web page.

**Instructions:** Create a mockup of a simple personal blog page with the following sections:

- Header:
  - Include the page title (`h1`) and a short tagline (`p` or `h2`).
- Main:
  - Contain two `section`s:
    - A featured article with a heading and a paragraph (use [Cupcake Ipsum](https://cupcakeipsum.com/) if tired or the `lorem10` ipsum)
    - Second Section that lists recent posts (use `ul>li*4>a`, add `#.#` for the `href` attribute)
- Aside with a small bio or a list of favourite links
- Footer with copyright disclaimer and current year

Focus on:

- Consistent indentation and proper nesting
- Using tags for structure, not for styling
- Adding comments (`<!-- like this -->`) to identify non semantic tags

---

## CSS

What does it stand for? What role does it play in Web Development?

- Ways to write CSS (inline, internal, external)
- Selectors - tag, class, id
- Touch upon specificity
- Inline and Block elements
- Box model - padding, border, margin, outline
- Shorthand
- Positioning
- Responsive, mobile first, media queries
- CSS units - px, em, rem, %, vh, vw
- Variables
- Normalize, reset

### Exercise 1: and only

**Objective:** Apply core CSS concepts to style one of your previous HTML exercises using external CSS (the right way to use CSS).

**Instructions:**

- Use external CSS
- Add a normalize or reset stylesheet
- Make one element absolute or fixed positioned (eg., sticky nav)
- Use at least one media query
- Add hover and focus state to clickable elements as `a` and `button`
