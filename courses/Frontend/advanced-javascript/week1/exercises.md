# Exercises

Use [generateListings()](./code-inspiration.md#generatelistings) to generate random listings

## ForEach

- Create 37 listings and log out every listings size

## Map

- Create an array that contains all the 37 listing prices.

## Filter

Using the 37 listings from the previous tasks

- Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
- Create an array of expensive listings prices. Each item in this array should be of type number
- Create an array of listings that have parking. Each item in this array should be of type object

## Arrow functions

Rewrite the code above (`forEach`, `map` and `filter`) to arrow functions.

## Listing project

Imagine we have a website like [Danske Bank](https://danskebank.dk/bolig/sogning?sorter=hoejt-forbrug) where a user can search for different parameters. Fx What type the listing should be, the price, size, location etc etc.

### Filter listings

If a user fx click on a button indicating that the user only wants listings that are of the type farm. Lets try and imagine how we would use a function to create this functionality:

```js
const listings = generateListings(20);

const filter = {
  type: "farm",
};

const farmListings = filterListings(listings, filter);
```

Okay, so the `filterListings` function takes a filter which is an `object`. Say the user wants farm listings that cost more than 1.500.000.

```js
const filter2 = {
  type: "farm",
  minPrize: 1500000,
};

const cheapFarmListings = filterListings(listings, filter2);
```

Your job is to create the `filterListings` function. The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!

### Render listings

Now create a function called `renderListings`. It should have one parameter: `listings`. When called the function should render the listings in an html list. How it should be rendered is up to you, but you could take inspiration from [Danske Bank](https://danskebank.dk/bolig/sogning?sorter=hoejt-forbrug)
