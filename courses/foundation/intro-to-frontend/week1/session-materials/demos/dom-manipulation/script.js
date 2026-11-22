// All content + class names are here — style rules live in style.css.
// Sections below match the task list in index.html.

const playlistTitle = "Friday evening playlist";
const titleClassName = "playlist-title";
const titleStyles = {
  color: "#0d6e6e",
  borderBottom: "3px solid #0d6e6e",
};

const nowPlayingHtml = "<strong>Now playing:</strong> Warm-up track";
const trackItemClassName = "track-item";

const tracks = ["Lo-fi study mix", "Friday kitchen playlist", "Walk home beats"];

const featured = {
  name: "Tips about dogs with small legs",
  imageUrl: "https://picsum.photos/seed/dom-demo/192/144",
};
const featureCardClassName = "feature-card";

const bannerText = "Tonight's picks";
const bannerClassName = "banner";

const statusReadyText = "Board ready";
const statusReadyClassName = "status-ready";
const pageTitle = "Friday playlist";

// --- 1. A styled playlist title ----------------------------------------------
// use: querySelector · textContent · classList · style
// - Get the title element (#board-title)
// - Set its text to playlistTitle
// - Add titleClassName
// - Apply titleStyles

// --- 2. A "now playing" item at the top of the list --------------------------
// use: querySelector · createElement · innerHTML · appendChild
// - Get the list (#track-list)
// - Create an li
// - Give it trackItemClassName
// - Set innerHTML to nowPlayingHtml
// - Append it to the list

// --- 3. All tracks from our data shown in the list ---------------------------
// use: createElement · textContent · appendChild
// - For each name in tracks
// - Create an li
// - Add trackItemClassName
// - Set textContent
// - Append it to the list

// --- 4. A featured podcast card with an image --------------------------------
// use: querySelector · createElement · appendChild
// - Get the feature slot (#feature-slot)
// - Build a card (featureCardClassName) from featured
// - Add an image only if imageUrl exists

// --- 5. A banner above the track list ----------------------------------------
// use: createElement · insertBefore
// - Create a <p>, set text to bannerText, add bannerClassName
// - Insert it before the list

// --- 6. Ready status, tab title, and viewport width in the console -----------
// use: getElementById · textContent · classList · document · window
// - Get the status element (#status)
// - Set its text to statusReadyText
// - Add statusReadyClassName
// - Set document.title to pageTitle
// - Log window.innerWidth
