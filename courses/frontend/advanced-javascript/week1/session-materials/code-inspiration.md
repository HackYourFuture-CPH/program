# Code inspiration

## `generateListings`

```js
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1,
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1,
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

generateListings(20);
```

## Mentors

```js
const mentors = [
  {
    name: "Abed Sujan",
    subjects: ["JS", "HTML", "CSS", "NODEJS"],
    yearOfExperience: 4,
  },
  {
    name: "Ahmed Magdy",
    subjects: ["JS", "Database", "CSS"],
    yearOfExperience: 1,
  },
  {
    name: "Alicia Gonzales",
    subjects: ["DB", "HTML", "NODEJS"],
    yearOfExperience: 8,
  },
  {
    name: "allan Thraen",
    subjects: ["REACT", "HTML", "CSS"],
    yearOfExperience: 3,
  },
  {
    name: "Anders Ravn",
    subjects: ["JS", "HTML", "NODEJS"],
    yearOfExperience: 2,
  },
  {
    name: "Daniel Fernandes",
    subjects: ["Database", "HTML", "CSS"],
    yearOfExperience: 9,
  },
];

console.log(mentors);
```

## `forEach`

```js
mentors.forEach(function (mentor) {
  console.log(mentor);
  console.log(mentor.name);

  mentor.subjects.forEach(function (subject) {
    console.log(subject);
  });
});
```

### `forEach` homemade

```js
function forEachHomemade(array, functionToExecute) {
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    functionToExecute(currentItem, i);
  }
}
```

## `map`

```js
// We are mapping/transforming the mentors array. Same size, different items.
const mentorNames = mentors.map(function (mentor) {
  return mentor.name;
});

const mentorNamesFormatted = mentors.map(function (mentor) {
  return "Mentors name is: " + mentor.name;
});

const mentorSummary = mentors.map(function (mentor) {
  return `Mentors name is: ${mentor.name}. They have ${mentor.yearsOfExperience} years of experience`;
});
```

### `map` homemade

```js
function mapHomemade(array, functionToExecute) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const newItem = functionToExecute(currentItem, i);
    // This is where the magic happens!!!
    mappedArray.push(newItem);
  }

  return mappedArray;
}
```

## `filter`

```js
// We are mapping/transforming the mentors array. Same size, different items.
const experiencedMentors = mentors.filter(function (mentor) {
  if (mentor.yearsOfExperience > 7) {
    return true;
  } else {
    return false;
  }

  // can also be written as
  // return mentor.yearsOfExperience > 7
  // Explain why!
});

// Get help from trainees to write this
const mentorsThatStartWithA = mentors.filter(function (mentor) {
  return mentor.name[0] == "A"; // Missing Allan, why?? lowercase
});
```

### `filter` homemade

```js
function FilterHomemade(array, functionToExecute) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const shouldKeepItemInNewArray = functionToExecute(currentItem, i);
    // This is where the magic happens!!!
    if (shouldKeepItemInNewArray) {
      filteredArray.push(currentItem);
    }
  }

  return filteredArray;
}
```

## Arrow function

```js
function circleArea(radius) {
  return radius * 2 * Math.pi;
}

// Remove the function keyword add in arrow
const circleArea1 = (radius) => {
  return radius * 2 * Math.pi;
};

// If there is only one parameter, we can remove the parenthesis
const circleArea2 = (radius) => {
  return radius * 2 * Math.pi;
};

// If there is only one line in the function we can remove the curly braces and the return statement
// radius * 2 * Math.pi is AUTOMATICALLY being returned
const circleArea3 = (radius) => radius * 2 * Math.pi;
```

## Other example

```js
function filterMentorList(courseID) {
  const resultHtml = document.getElementById("result");

  let listHtml = "";
  listHtml += "<div> Fowad</div>";
  listHtml += "<div> Susanne</div>";
  listHtml += "<div> Sara</div>";
  resultHtml.innerHTML = listHtml;

  console.log("courseID", courseID);
}

let modifiedMentors = mentors.map(function (mentor) {
  mentor.name =
    mentor["name"].length > 10 ? "Mr " + mentor.name : "Ms " + mentor.name;

  mentor.age = mentor["name"].length;
  // if(mentor["name"].length >10)
  // mentor.name = "Mr " + mentor.name;
  // else
  // mentor.name = "Ms " + mentor.name;

  return mentor;
});

function filterMentorList(courseID) {
  const resultHtml = document.getElementById("result");
  let listHtml = "";

  let filtersListByCourseId = mentors.filter(function (mentor) {
    const sub = mentor.subject;
    return sub.indexOf(courseID) >= 0;
  });

  filtersListByCourseId.forEach(function (mentor) {
    listHtml += `<div>  ${mentor.name}  - ${mentor.age}  </div>`;
  });

  resultHtml.innerHTML = listHtml;
}

function filterMentorListUsingFor(courseID) {
  const resultHtml = document.getElementById("result");
  let listHtml = "";
  for (let i = 0; i < mentors.length; i++) {
    listHtml += `<div> ${mentors[i].name}</div>`;
  }
  resultHtml.innerHTML = listHtml;
  console.log("courseID", courseID);
}
```
