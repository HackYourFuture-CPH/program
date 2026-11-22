// Different APIs than the class exercises (those stay astronauts + dogs).
// Sections below match the task list in index.html.
//
// Fetch pattern to copy (don't worry about how .then works yet):
//
//   fetch(someUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // use data here
//     });

const yesNoUrl = "https://yesno.wtf/api/";
const jokeUrl =
  "https://v2.jokeapi.dev/joke/Programming?type=twopart&safe-mode";
const adviceUrl = "https://api.adviceslip.com/advice";
const jokeRefreshMs = 5000;

// --- 1. A yes/no answer with a matching GIF ----------------------------------
// use: fetch · querySelector · textContent · src
// - Fetch yesNoUrl
// - Set #yesno-answer text to data.answer
// - Set #yesno-image src to data.image

// --- 2. A random joke (setup + punchline) ------------------------------------
// use: fetch · querySelector · textContent
// - Fetch jokeUrl
// - Put data.setup into #joke-setup
// - Put data.delivery into #joke-punchline

// --- 3. A piece of advice ----------------------------------------------------
// use: fetch · querySelector · textContent
// - Fetch adviceUrl
// - Set #advice-text to data.slip.advice

// --- 4. A "Try again" button that reloads the yes/no answer ------------------
// use: querySelector · addEventListener · click · fetch
// - Get #refresh-yesno
// - On click, run the yes/no fetch again

// --- 5. The joke updates automatically every 5 seconds -----------------------
// use: setInterval
// - Call the joke fetch every jokeRefreshMs with setInterval
