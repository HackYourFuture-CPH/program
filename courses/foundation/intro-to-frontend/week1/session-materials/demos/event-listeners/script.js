// All content + class names are here — style rules live in style.css.
// Sections below match the task list in index.html.

const clickedButtonText = "Button clicked";

const darkThemeClassName = "theme-dark";
const themeButtonTextWhenLight = "Switch to dark";
const themeButtonTextWhenDark = "Switch to light";

const greetingPrefix = "Hello, ";

const stickerIdleText = "Hover me";
const stickerHoverText = "Nice to meet you!";

// --- 1. Clicking the action button changes its label -------------------------
// use: querySelector · addEventListener · click · textContent · event
// - Get the action button (#action-btn)
// - Listen for click
// - Inside the handler: console.log(event) (see the event object)
// - Set the button text to clickedButtonText (you can use event.target)

// --- 2. A light / dark theme toggle for the whole page -----------------------
// use: querySelector · addEventListener · click · classList.toggle · textContent
// - Get the theme button (#theme-btn)
// - Listen for click
// - Toggle darkThemeClassName on document.body
// - Update the button label: if body has the dark class, use
//   themeButtonTextWhenDark, otherwise themeButtonTextWhenLight

// --- 3. Typing a name updates the greeting live ------------------------------
// use: querySelector · addEventListener · input · value · textContent
// - Get the name input (#name-input) and the greeting (#greeting)
// - Listen for input on the name field
// - Set greeting text to greetingPrefix + the input's value
// - Optional: also try the change event and compare when it fires

// --- 4. Hovering the sticker changes its message -----------------------------
// use: querySelector · addEventListener · mouseover · mouseout · textContent
// - Get the sticker (#sticker)
// - On mouseover, set text to stickerHoverText
// - On mouseout, set text back to stickerIdleText
