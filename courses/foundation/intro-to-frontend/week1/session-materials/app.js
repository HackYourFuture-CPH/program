/**
 * Register new demos here. Order = session order.
 * Each demo is a self-contained folder under ./demos/
 * Homepage (overview) is always slide 0.
 */
const demos = [
  {
    id: "dom-as-tree",
    title: "HTML → DOM tree",
    description: "How HTML becomes a tree of objects in the browser",
    path: "demos/dom-as-tree/index.html",
  },
  {
    id: "client-server",
    title: "Client ↔ Server",
    description: "GET static files, then fetch data from the server",
    path: "demos/client-server/index.html",
  },
  {
    id: "debugging",
    title: "Code debugging",
    description: "Open DevTools, console.log, and debugger",
    path: "demos/debugging/index.html",
  },
  {
    id: "dom-manipulation",
    title: "DOM manipulation",
    description: "Live task: fill gaps to build a playlist with the DOM",
    path: "demos/dom-manipulation/index.html",
  },
  {
    id: "event-listeners",
    title: "Event listeners",
    description: "Live task: click, theme toggle, input, and mouseover",
    path: "demos/event-listeners/index.html",
  },
  {
    id: "fetch",
    title: "Fetch",
    description: "Live task: yes/no, joke, advice — not the class APIs",
    path: "demos/fetch/index.html",
  },
];

const homeEl = document.querySelector("#home");
const frame = document.querySelector("#demo-frame");
const titleEl = document.querySelector("#slide-title");
const controlsEl = document.querySelector("#shell-controls");
const positionEl = document.querySelector("#slide-position");
const prevBtn = document.querySelector("#prev-slide");
const nextBtn = document.querySelector("#next-slide");
const demoListEl = document.querySelector("#demo-list");

// Slide 0 = home, then each demo
const slideCount = demos.length + 1;
let currentIndex = 0;

function renderHomeList() {
  demoListEl.innerHTML = "";

  demos.forEach((demo, i) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-list-item";

    const num = document.createElement("span");
    num.className = "demo-list-num";
    num.textContent = String(i + 1).padStart(2, "0");

    const body = document.createElement("span");
    body.className = "demo-list-body";

    const title = document.createElement("span");
    title.className = "demo-list-title";
    title.textContent = demo.title;

    const desc = document.createElement("span");
    desc.className = "demo-list-desc";
    desc.textContent = demo.description || "";

    body.appendChild(title);
    if (demo.description) body.appendChild(desc);

    button.appendChild(num);
    button.appendChild(body);
    button.addEventListener("click", () => showSlide(i + 1));

    li.appendChild(button);
    demoListEl.appendChild(li);
  });
}

function showSlide(index) {
  currentIndex = ((index % slideCount) + slideCount) % slideCount;

  if (currentIndex === 0) {
    homeEl.classList.remove("is-hidden");
    frame.classList.add("is-hidden");
    frame.src = "about:blank";
    titleEl.textContent = "Overview";
    document.title = "Overview — Intro to Frontend";
    controlsEl.classList.add("is-hidden");
    return;
  }

  const demoIndex = currentIndex - 1;
  const demo = demos[demoIndex];
  homeEl.classList.add("is-hidden");
  frame.classList.remove("is-hidden");
  frame.src = demo.path;
  titleEl.textContent = demo.title;
  document.title = `${demo.title} — Intro to Frontend`;
  controlsEl.classList.remove("is-hidden");
  positionEl.textContent = `${demoIndex + 1} / ${demos.length}`;

  const onlyOneDemo = demos.length < 2;
  prevBtn.disabled = onlyOneDemo;
  nextBtn.disabled = onlyOneDemo;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function handleNavKey(event) {
  const tag = event.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    prevSlide();
  }
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
document.addEventListener("keydown", handleNavKey);

frame.addEventListener("load", () => {
  try {
    frame.contentWindow.document.addEventListener("keydown", handleNavKey);
  } catch {
    // Cross-origin demos can't forward keys; use the nav buttons
  }
});

renderHomeList();
showSlide(0);
