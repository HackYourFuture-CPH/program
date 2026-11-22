# Session Plan

- Objects
  - Access properties two ways: .keyname and [keyname]
  - Key - value
  - Array of objects
  - Let the trainees explain iterating an array of objects
  - Use real world examples (users, products, house listings)
  - [Code inspiration](#inspiration-objects)
  - Then: [Task 1: My Pet](#task-1-my-pet)
- Arrays continued
  - `pop`, `push`, `shift`, `unshift`
    - Let trainees investigate `shift` and `unshift`
    - The longest of the word pairs unshift, push makes the array longer!
  - `includes` - Let the trainees investigate this
  - Looping through an array
  - No `forEach`, `map`, `filter` or `reduce`
  - [Code inspiration](#inspiration-arrays)
  - Then: [Task 2: Shopping List](#task-2-shopping-list), [Task 3: Countdown to Launch](#task-3-countdown-to-launch), [Task 4: Student Grades](#task-4-student-grades)
- [CodeWar exercises](#codewar-exercises)
- Call stack
  - Used for figuring code flow in js! Where does my function go when it is done here.
  - <http://latentflip.com/loupe> <!-- no-https -->
  - [Code inspiration](#inspiration-call-stack)
  - [Exercise](#exercise-call-stack)

Zoey Zou has created a nice session plan here: <https://www.notion.so/JS1-Week3-a0f122866ac34fc3b98b7a41870046f4>

## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/JavaScript/blob/main/javascript1/week3/preparation.md#flipped-classroom-videos)

## Code inspiration

### Inspiration: Objects

```js
const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};

console.log(user);

// Add new property
user.lastName = "Bay";

console.log(user);

delete user.lastName;

console.log(user);

console.log(user.hobbies.favourite);
console.log({ favourite: "computers", sports: "running to class" }.favourite);

function graduatedClass(student, className) {
  if (student.classes.includes(className)) return "Error";

  student.classes.push(className);
}

console.log(user);
graduatedClass(user, "HTML");
console.log(user);
graduatedClass(user, "HTML");

const newUser = {
  name: "",
  age: "",
};

var students = [];
function addStudent(student) {
  if (student.name == null && typeof student.name === "string") return "Error";
  if (student.age == null) return "Error";

  students.push(student);
}

addStudent({ name: "Rahim" });
console.log(students);

// ways to access properties

user.name;
user["name"];

const prop = "name";
user[prop];

user["name"] = "Maria";
user[0] = "Hello world";

console.log(user);
```

### Inspiration: Arrays

```js
// one way to have multiple data about a student is with an array
// for each piece of data
const studentNames = ["Fowad", "Emil", "Zoey"];

const studentAges = [32, 25, 28];

console.log(studentNames);
console.log(studentAges);

// Another, more ergonomic way is with objects
const students = [
  { name: "Fowad", age: 32 },
  { name: "Emil", age: 25, teacher: true },
  { name: "Zoey", age: 28 },
];

console.log(students);
// We can access properties with `.`
console.log(students[0].name);

for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  console.log(typeof currentStudent);
  console.log(currentStudent.name);
}

students.push({ name: "Ahmad", age: 27 });

// One object that we have seen before
const Math = {
  random: function () {
    return 42;
  },
  round: function (x) {},
};
```

### Inspiration: Call stack

```js
function a() {
  // add to call stack
  b();

  return "a";
  // remove from call stack
}

function b() {
  //throw 'hello';
  return "b";
}

a();
```

## Exercises

> **Note:** Start with the practice tasks below — they reuse the same operations from the class demos. When those feel comfortable, move on to the CodeWars exercises.

### Task 1: My Pet

Topic: Objects — creating, updating, and deleting properties.

You just got a new pet! Let’s create an object to store information about it.

1. Create an object called `pet` with three properties:
   - `name`: `"Buddy"`
   - `type`: `"dog"`
   - `age`: `2`
2. Print the pet’s name to the console.
3. Buddy just had a birthday! Update the age to `3`.
4. Add a new property called `color` with the value `"brown"`.
5. Delete the `type` property.
6. Print the entire object to the console.

Expected final result:

```js
{
  name: "Buddy",
  age: 3,
  color: "brown"
}
```

### Task 2: Shopping List

Topic: Arrays — iterating from first to last.

You’re going grocery shopping and want to print your shopping list.

Starter code:

```js
const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Cheese"];
```

1. Use a `for` loop to go through the array from first to last.
2. Print each item with its position number (starting from 1).
3. After the loop, print the total number of items.

Expected output:

```text
1. Milk
2. Bread
3. Eggs
4. Apples
5. Cheese
Total items: 5
```

Bonus: Print `"Don’t forget the eggs!"` when you encounter `"Eggs"`.

### Task 3: Countdown to Launch

Topic: Arrays — iterating from last to first.

You’re preparing a rocket for launch! The countdown numbers are stored in an array, but they’re in the wrong order.

Starter code:

```js
const countdown = [1, 2, 3, 4, 5];
```

1. Use a `for` loop to go through the array from last to first.
2. Print each number to the console.
3. After the loop, print `"🚀 Blast off!"`.

Expected output:

```text
5
4
3
2
1
🚀 Blast off!
```

Bonus: Make sure your code works with any length of the countdown array.

### Task 4: Student Grades

Topic: Arrays of objects — iterating and modifying objects.

You’re helping a teacher manage student information. Each student has a name and a test score.

Starter code:

```js
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 73 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 38 },
];
```

1. Use a `for` loop to go through all students.
2. Add a new property called `passed` to each student.
3. Set `passed` to `true` if their score is 50 or higher, otherwise `false`.
4. Print each student’s name and whether they passed.
5. Print the updated `students` array.

Expected final result:

```js
[
  { name: "Alice", score: 85, passed: true },
  { name: "Bob", score: 42, passed: false },
  { name: "Charlie", score: 73, passed: true },
  { name: "Diana", score: 95, passed: true },
  { name: "Eve", score: 38, passed: false },
]
```

Bonus: Count how many students passed and print the result.

## Exercise: Call stack

Draw the call stack array at every draw point

```js
function bookPlaneTickets() {
  // draw
  console.log("Plane tickets booked");
  requestVacationDays();
  // draw
}

function bookHotel() {
  console.log("Hotel booked");
  // draw
  planItinerary();
  // draw
}

function requestVacationDays() {
  // draw
  console.log("Vacation days requested");
  // draw
}

function planItinerary() {
  console.log("Itinerary done");
  // draw
}

function planTrip() {
  bookPlaneTickets();
  // draw
  bookHotel();
  // draw
  console.log("Trip planned");
}
// draw
planTrip();
// draw
```

### CodeWar exercises

- [CodeWars - Add property to every object](https://www.codewars.com/kata/add-property-to-every-object-in-array/train/javascript)
- [CodeWars - Color Association](https://www.codewars.com/kata/colour-association/train/javascript)
- [CodeWars - Unfinished loop](https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript)
- [CodeWars - Is this my tail](https://www.codewars.com/kata/is-this-my-tail/train/javascript)
- [CodeWars - Longest word](https://www.codewars.com/kata/squash-the-bugs/train/javascript)
- [CodeWars - Who's Online](https://www.codewars.com/kata/whos-online/train/javascript)
