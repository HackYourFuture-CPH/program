const logBtn = document.querySelector("#log-btn");
const logFeedback = document.querySelector("#log-feedback");
const debugBtn = document.querySelector("#debug-btn");
const debugName = document.querySelector("#debug-name");
const debugFeedback = document.querySelector("#debug-feedback");

logBtn.addEventListener("click", () => {
  const trainee = { name: "Sam", week: 1, module: "intro-to-frontend" };
  const scores = [10, 8, 9];

  console.log("=== console.log demo ===");
  console.log("A simple string");
  console.log("A number:", 42);
  console.log("Several values:", "week", 1, true);
  console.log("An object:", trainee);
  console.log("An array:", scores);
  console.table(trainee);
  console.trace("Stack trace from this click handler");
  console.warn("This is a warning");
  console.error("This is an error (on purpose)");

  logFeedback.textContent = "Logged — check the Console tab.";
});

debugBtn.addEventListener("click", () => {
  const name = debugName.value.trim() || "friend";
  const greeting = buildGreeting(name);
  debugFeedback.textContent = greeting;
});

function buildGreeting(name) {
  const upper = name.toUpperCase();
  const message = "Hello, " + upper + "!";

  // DevTools pauses here when open — inspect name, upper, message
  debugger;

  return message;
}
