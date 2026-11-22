const HTML_LINES = [
  { id: "doctype", text: "<!DOCTYPE html>" },
  { id: "html-open", text: "<html>" },
  { id: "head-open", text: "  <head>" },
  {
    id: "link",
    text: '    <link rel="stylesheet" href="style.css">',
    asset: "css",
  },
  { id: "head-close", text: "  </head>" },
  { id: "body-open", text: "  <body>" },
  { id: "h1", text: "    <h1>Hello</h1>" },
  { id: "button", text: "    <button>Click me</button>" },
  {
    id: "script",
    text: '    <script src="script.js"><\/script>',
    asset: "js",
  },
  { id: "body-close", text: "  </body>" },
  { id: "html-close", text: "</html>" },
];

const steps = [
  {
    caption: "Browser (client) and server sit on different machines.",
    run() {
      resetVisuals();
      setUrl("about:blank");
      setViewport('<p class="placeholder">Empty — no page yet</p>');
    },
  },
  {
    caption: "User opens a URL. Browser sends GET /index.html to the server.",
    async run() {
      resetVisuals();
      setUrl("https://example.com/");
      setViewport('<p class="placeholder">Requesting…</p>');
      highlightFile("html");
      await sendPacket("GET /index.html", "request");
    },
  },
  {
    caption: "Server responds with the HTML file.",
    async run() {
      resetVisuals({ keepUrl: true });
      setUrl("https://example.com/");
      setViewport('<p class="placeholder">Waiting for response…</p>');
      highlightFile("html");
      markSent("html");
      await sendPacket("200 OK · index.html", "response");
    },
  },
  {
    caption:
      "Browser starts reading the HTML from the top. CSS is linked in <head>.",
    run() {
      resetVisuals({ keepUrl: true, keepSent: ["html"] });
      setUrl("https://example.com/");
      showHtmlSource({ cursor: "link", seenThrough: "link" });
      showParse([
        { text: "Reading <head>…", done: true },
        { text: "Found <link> → style.css", done: false },
        { text: "<script> not reached yet", done: false },
      ]);
    },
  },
  {
    caption: "So it requests CSS now — GET style.css — before finishing the body.",
    async run() {
      resetVisuals({ keepUrl: true, keepSent: ["html"] });
      setUrl("https://example.com/");
      showHtmlSource({ cursor: "link", seenThrough: "link" });
      showParse([
        { text: "Found <link> in <head>", done: true },
        { text: "GET style.css", done: false },
      ]);
      highlightFile("css");
      await sendPacket("GET style.css", "request");
    },
  },
  {
    caption: "Server returns style.css. Browser can apply styles.",
    async run() {
      resetVisuals({ keepUrl: true, keepSent: ["html"] });
      setUrl("https://example.com/");
      showHtmlSource({ cursor: "link", seenThrough: "link", cssLoaded: true });
      highlightFile("css");
      markSent("css");
      showParse([
        { text: "Got style.css", done: true },
        { text: "Still reading HTML…", done: false },
      ]);
      await sendPacket("200 OK · style.css", "response");
    },
  },
  {
    caption:
      "Parsing continues into <body>. Visible content appears before any JS.",
    run() {
      resetVisuals({ keepUrl: true, keepSent: ["html", "css"] });
      setUrl("https://example.com/");
      showHtmlSource({
        cursor: "h1",
        seenThrough: "h1",
        cssLoaded: true,
      });
      showParse([
        { text: "CSS already loaded", done: true },
        { text: "Reading <body>… found <h1>", done: true },
        { text: "<script> not reached yet", done: false },
      ]);
    },
  },
  {
    caption:
      "Page is already painted and styled — JS has not loaded yet. Button does nothing.",
    run() {
      resetVisuals({ keepUrl: true, keepSent: ["html", "css"] });
      setUrl("https://example.com/");
      showRenderedPage({ mode: "styled" });
      showParse([
        { text: "HTML body content painted", done: true },
        { text: "CSS applied", done: true },
        { text: "script.js not loaded → not interactive", done: false },
      ]);
    },
  },
  {
    caption:
      "Only at the end of <body> does the browser find <script> and request it.",
    async run() {
      resetVisuals({ keepUrl: true, keepSent: ["html", "css"] });
      setUrl("https://example.com/");
      showHtmlSource({
        cursor: "script",
        seenThrough: "script",
        cssLoaded: true,
      });
      showParse([
        { text: "Page already visible", done: true },
        { text: "Found <script> → script.js", done: true },
        { text: "GET script.js", done: false },
      ]);
      highlightFile("js");
      await sendPacket("GET script.js", "request");
    },
  },
  {
    caption: "Server returns script.js. Browser runs it — page becomes live.",
    async run() {
      resetVisuals({ keepUrl: true, keepSent: ["html", "css"] });
      setUrl("https://example.com/");
      showRenderedPage({ mode: "styled" });
      highlightFile("js");
      markSent("js");
      showParse([
        { text: "Got script.js", done: true },
        { text: "Attach click listener…", done: false },
      ]);
      await sendPacket("200 OK · script.js", "response");
    },
  },
  {
    caption: "Now it is interactive — try the button.",
    run() {
      resetVisuals({ keepUrl: true, keepSent: ["html", "css", "js"] });
      setUrl("https://example.com/");
      showRenderedPage({ mode: "live" });
      showParse([
        { text: "JS running", done: true },
        { text: "Click handlers attached", done: true },
        { text: "Page is live", done: true },
      ]);
    },
  },
  {
    caption:
      "Later, that same JS can ask the server again — fetch('/api/data.json').",
    async run() {
      resetVisuals({ keepUrl: true, keepSent: ["html", "css", "js"] });
      setUrl("https://example.com/");
      showRenderedPage({ mode: "live", loading: true });
      showParse([
        { text: "Page already live", done: true },
        { text: "JS runs fetch(...)", done: false },
        { text: "Waiting for data…", done: false },
      ]);
      highlightFile("data");
      await sendPacket("GET /api/data.json", "request");
    },
  },
  {
    caption: "Same path as before: server responds — this time with data (JSON).",
    async run() {
      resetVisuals({
        keepUrl: true,
        keepSent: ["html", "css", "js"],
      });
      setUrl("https://example.com/");
      showRenderedPage({ mode: "live", loading: true });
      highlightFile("data");
      markSent("data");
      showParse([
        { text: "Page already live", done: true },
        { text: "JS ran fetch(...)", done: true },
        { text: "200 OK · JSON data", done: false },
      ]);
      await sendPacket("200 OK · data.json", "response");
    },
  },
  {
    caption:
      "JS receives the data and updates the page — still client ↔ server.",
    run() {
      resetVisuals({
        keepUrl: true,
        keepSent: ["html", "css", "js", "data"],
      });
      setUrl("https://example.com/");
      showRenderedPage({
        mode: "live",
        data: '{ "message": "Hi from the server" }',
      });
      showParse([
        { text: "fetch resolved", done: true },
        { text: "Got JSON data", done: true },
        { text: "Update the DOM", done: true },
      ]);
    },
  },
];

const packetEl = document.querySelector("#packet");
const urlEl = document.querySelector("#browser-url");
const viewportEl = document.querySelector("#browser-viewport");
const parsePanel = document.querySelector("#parse-panel");
const parseList = document.querySelector("#parse-list");
const stepCountEl = document.querySelector("#step-count");
const stepCaptionEl = document.querySelector("#step-caption");
const prevBtn = document.querySelector("#prev-step");
const nextBtn = document.querySelector("#next-step");
const restartBtn = document.querySelector("#restart-step");

let stepIndex = 0;
let runToken = 0;

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setUrl(url) {
  urlEl.textContent = url;
}

function setViewport(html) {
  viewportEl.classList.remove("is-rendered");
  viewportEl.innerHTML = html;
}

function showHtmlSource({
  cursor = null,
  seenThrough = null,
  cssLoaded = false,
  jsLoaded = false,
} = {}) {
  const seenIndex = seenThrough
    ? HTML_LINES.findIndex((line) => line.id === seenThrough)
    : -1;

  const lines = HTML_LINES.map((line, index) => {
    const classes = ["code-line"];
    if (index <= seenIndex) classes.push("is-seen");
    if (line.id === cursor) classes.push("is-cursor");
    if (line.asset === "css" && cssLoaded) classes.push("is-loaded");
    if (line.asset === "js" && jsLoaded) classes.push("is-loaded");

    const region =
      line.id.startsWith("head") || line.id === "link"
        ? "head"
        : line.id.startsWith("body") ||
            line.id === "h1" ||
            line.id === "button" ||
            line.id === "script"
          ? "body"
          : "";

    return `<div class="${classes.join(" ")}" data-region="${region}"><code>${escapeHtml(line.text)}</code></div>`;
  }).join("");

  viewportEl.classList.remove("is-rendered");
  viewportEl.innerHTML = `<div class="html-source" aria-label="index.html source">${lines}</div>`;
}

function showRenderedPage({
  mode = "styled",
  loading = false,
  data = null,
} = {}) {
  const live = mode === "live";
  viewportEl.classList.add("is-rendered");
  viewportEl.classList.toggle("is-live", live);

  const status = live
    ? '<span class="page-status is-live">live · JS loaded</span>'
    : '<span class="page-status">styled · waiting for JS</span>';

  const button = live
    ? '<button type="button" class="page-btn" id="demo-click">Click me</button>'
    : '<button type="button" class="page-btn is-dead" disabled>Click me</button>';

  let html = `${status}<h2>Hello</h2><p>Visible and styled already.</p>${button}<p class="click-log" id="click-log"></p>`;

  if (loading) {
    html += '<p class="data-line is-loading">Loading data…</p>';
  } else if (data) {
    html += `<p class="data-line"><code>${data}</code></p>`;
  }

  viewportEl.innerHTML = html;

  if (live) {
    const btn = viewportEl.querySelector("#demo-click");
    const log = viewportEl.querySelector("#click-log");
    let clicks = 0;
    btn.addEventListener("click", () => {
      clicks += 1;
      log.textContent =
        clicks === 1 ? "Clicked once!" : `Clicked ${clicks} times!`;
    });
  }
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showParse(items) {
  parsePanel.hidden = false;
  parseList.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item.text;
    if (item.done) li.classList.add("is-done");
    parseList.appendChild(li);
  }
}

function hideParse() {
  parsePanel.hidden = true;
  parseList.innerHTML = "";
}

function highlightFile(key) {
  const file = document.querySelector(`[data-file="${key}"]`);
  if (file) file.classList.add("is-active");
}

function markSent(key) {
  const file = document.querySelector(`[data-file="${key}"]`);
  if (file) {
    file.classList.add("is-sent");
    file.classList.remove("is-active");
  }
}

function resetVisuals({ keepUrl = false, keepSent = [] } = {}) {
  packetEl.className = "packet";
  packetEl.textContent = "";
  hideParse();
  document.querySelectorAll(".file").forEach((file) => {
    file.classList.remove("is-active", "is-sent");
    if (keepSent.includes(file.dataset.file)) {
      file.classList.add("is-sent");
    }
  });
  if (!keepUrl) setUrl("about:blank");
}

function sendPacket(label, direction) {
  const token = runToken;
  return new Promise((resolve) => {
    packetEl.className = "packet";
    void packetEl.offsetWidth;
    packetEl.textContent = label;
    packetEl.classList.add(
      "is-visible",
      direction === "request" ? "is-request" : "is-response",
    );
    window.setTimeout(() => {
      if (token !== runToken) return;
      packetEl.classList.remove("is-visible", "is-request", "is-response");
      resolve();
    }, 900);
  });
}

async function showStep(index) {
  runToken += 1;
  const token = runToken;
  stepIndex = Math.max(0, Math.min(index, steps.length - 1));
  stepCountEl.textContent = `${stepIndex + 1} / ${steps.length}`;
  stepCaptionEl.textContent = steps[stepIndex].caption;
  prevBtn.disabled = stepIndex === 0;
  nextBtn.disabled = stepIndex === steps.length - 1;
  nextBtn.textContent = stepIndex === steps.length - 1 ? "Done" : "Next step";

  await steps[stepIndex].run();
  if (token !== runToken) return;
}

function nextStep() {
  if (stepIndex < steps.length - 1) showStep(stepIndex + 1);
}

function prevStep() {
  if (stepIndex > 0) showStep(stepIndex - 1);
}

prevBtn.addEventListener("click", prevStep);
nextBtn.addEventListener("click", nextStep);
restartBtn.addEventListener("click", () => showStep(0));

document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    nextStep();
  } else if (event.key === "Backspace") {
    event.preventDefault();
    prevStep();
  }
});

showStep(0);
