## Learning goals
 * **Classes**: Learn to use classes to easily create similar objects.
    - Declaring a class using `class`, `constructor`, and `this`
    - Instantiating objects from classes using `new`
    - Methods and constructors
    - Static methods
    - Inheritance using `extends` and `super()`
    - When to use classes vs objects


``` js
// Example of declaring a Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// Example of an actual person created from the Person class
const alice = new Person('Alice', 25);
alice.greet();
```
## Preparation

> [!IMPORTANT]
> Please go through the material and come to class prepared

### Arrow Functions
Use one or more of the links to understand the learning goals:

- 📖 [JavaScript Arrow Function](https://www.w3schools.com/js/js_arrow_function.asp) (10 min)
- 📽️ [Javascript Arrow Functions](https://youtu.be/DFyfbJk4sZw) (10 min)

### Array Functions
- 📽️ [Javascript advanced array methods part 1](https://youtu.be/wBKv2EX2hw8) (20 min)
- 📽️ [JavaScript advanced array methods part 2](https://youtu.be/w4FNF8FLjQU) (5 min)
- 📽️ [Fun fun functional](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) Check the first 2 videos. (20 min)
- 📽️ [Array Iteration: 8 Methods](https://www.youtube.com/watch?v=Urwzk6ILvPQ) (5 min)
- 📖 [10 JavaScript array methods you should know](https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3) (10 min)
- 📖 [Chaining Array functions](https://www.geeksforgeeks.org/javascript/chaining-of-array-methods-in-javascript/) (5 min)

* 📖 (Optional) Go to the [official documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) and read the *description and examples* of each function: 
   * `ForEach()` (10 min)
   * `map()` (10 min)
   * `filter()` (10 min)

