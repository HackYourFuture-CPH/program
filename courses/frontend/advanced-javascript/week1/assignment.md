# Assignment

<!-- The type of assignment you write will vary a lot depending on the module. But either way, all of the set up, instructions and tips should be captured in here. -->

The warmup exercises will be a bit abstract. But the in the **hyfBay exercise** the task will be a lot closer to a **real world task**.

## 1. Doubling of number

Say you would like to write a program that **doubles the odd numbers** in an array and **throws away the even number**.

Your solution could be something like this:

```js
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
```

Rewrite the above program using `map` and `filter` don't forget to use arrow functions.

## 2. Codewars!

Complete these Katas:

- [8 kyu To square(root) or not to square(root)](https://www.codewars.com/kata/57f6ad55cca6e045d2000627)
- [8 kyu Removing Elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2)

## 3. Working with movies

![cinema](https://media.giphy.com/media/l6mBchxYZc7Sw/giphy.gif)

Copy the movies array in the [movies](./session-materials/movies.js) file. Use this array to do the following tasks:

1. Create an array of movies containing the **movies with a short title** (you define what short means)
2. Create an array of movie titles with **long movie titles**
3. Count the **number of movies** made between 1980-1989 (including both the years)
4. Create a new array that has an **extra key called tag**. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
6. **Count the total number of movies** containing any of following keywords: `Surfer`, `Alien` or `Benjamin`. So if there were 3 movies that contained `Surfer`, 1 with `Alien` and 2 with `Benjamin`, you would return 6. Can you make sure the search is case insensitive?
7. Create an array of movies where a **word in the title is duplicated**. e.g. "Star **Wars**: The Clone **Wars**" the word **Wars** is duplicated. Here are some made-up examples of movies with duplicated words in the title: "**The** three men and **the** pistol", "**Chase** three - The final **chase**"
8. Calculate the **average rating** of all the movies using `.reduce()` _Optional_
9. **Count the total number** of Good, Average and Bad movies using `.reduce()`. A return could be e.g. `{goodMovies: 33, averageMovies: 45, goodMovies: 123}` _Optional_
