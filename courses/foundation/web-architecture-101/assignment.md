# Assignment

## Design Recipe Collection App

Design the architecture for a simple recipe collection application where users can manage their favorite recipes.

### Requirements

The app should allow users to:

- **Create**: Add a new recipe (title, ingredients, instructions)
- **Read**: View all recipes and individual recipe details
- **Update**: Edit existing recipes
- **Delete**: Remove recipes they no longer want

### Your Task

1. **Draw a simple diagram** showing the architecture of this recipe app
2. **Identify the components**:
   - Where is the recipe data stored?
   - How does the frontend communicate with the backend?
   - What happens when a user adds a new recipe?

3. **Create sequence diagrams** showing the communication flow for:
   - Adding a new recipe
   - Viewing a specific recipe
   - Editing an existing recipe

   Use this format to show how different parts communicate:

```markdown
User → Frontend → Backend → Database
User clicks "Add Recipe" button
Frontend sends POST /recipes with recipe data
Backend saves data to database
Backend sends success response
Frontend updates the page
```

_Need help with sequence diagrams? Check out this [tutorial on sequence diagrams](https://creately.com/guides/sequence-diagram-tutorial/)._

### Deliverables

Submit a document (text, image, or diagram) that includes:

- Your architecture diagram
- Brief explanations of each component
- Sequence diagrams for the three user flows

Keep it simple and focus on the basic structure - you don't need to worry about complex features like user authentication or advanced search.

### Tools for Creating Diagrams

Need help creating your diagrams? Here are some free drawing tools you can use:

- **[Excalidraw](https://excalidraw.com/)** - Simple, collaborative whiteboard tool perfect for technical diagrams
- **[Draw.io](https://app.diagrams.net/)** - Free online diagramming tool with many templates
- **[Google Drawings](https://docs.google.com/drawings/)** - Simple drawing tool integrated with Google Workspace

### Tips

- Think about what the user sees (frontend) vs what happens behind the scenes (backend)
- Consider where recipe data needs to be stored permanently
- Remember that the frontend and backend need to communicate somehow
- For sequence diagrams, show the step-by-step communication between User → Frontend → Backend → Database
- Include HTTP methods (GET, POST, PUT, DELETE) in your sequence diagrams
