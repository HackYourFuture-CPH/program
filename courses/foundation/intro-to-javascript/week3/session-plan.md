# Session Plan

- Objects
  - Access properties two ways: .keyname and [keyname]
  - Key - value
  - Array of objects
  - Let the trainees explain iterating an array of objects
  - Use real world examples (users, products, house listings)
  - [Code inspiration](#inspiration-objects)
- Arrays continued
  - `pop`, `push`, `shift`, `unshift`
    - Let trainees investigate `shift` and `unshift`
    - The longest of the word pairs unshift, push makes the array longer!
  - `includes` - Let the trainees investigate this
  - Looping through an array
  - No `forEach`, `map`, `filter` or `reduce`
  - [Code inspiration](#inspiration-arrays)
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
