# Classes & Advanced Promises (Week 4)

In this session, you'll learn how to use JavaScript classes to create reusable templates for objects that share common properties and behaviors. By mastering classes and inheritance, you'll be able to organize your code more efficiently and implement object-oriented programming principles. These skills will help you write cleaner, more maintainable code and understand the differences between classes and objects in JavaScript.

## Contents

- [Preparation](./preparation.md)
- [Session Plan](./session-plan.md) (for mentors)
- [Assignment](./assignment.md)

## Session Learning Goals

By the end of this session, you will be able to:

- [ ] Use **classes** to easily create similar objects.
  - [ ] Declare a class using `class`, `constructor`, and `this`
  - [ ] Instantiate objects from classes using `new`
  - [ ] Use Methods and constructors
  - [ ] Use Static methods
  - [ ] Use inheritance with `extends` and `super()`
  - [ ] Understand the difference between classes vs objects

```js
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
const alice = new Person("Alice", 25);
alice.greet();
```
