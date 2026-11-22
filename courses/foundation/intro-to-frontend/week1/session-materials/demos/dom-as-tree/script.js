const pageContent = document.querySelector("#page-content");
const treeRoot = document.querySelector("#dom-tree");

function getMeaningfulChildren(node) {
  return [...node.childNodes].filter((child) => {
    if (child.nodeType === Node.ELEMENT_NODE) return true;
    if (child.nodeType === Node.TEXT_NODE) {
      return child.textContent.trim() !== "";
    }
    return false;
  });
}

function createObjectBox(node) {
  const box = document.createElement("div");
  box.className = "object-box";

  const type = document.createElement("span");
  type.className = "type";

  const meta = document.createElement("span");
  meta.className = "meta";

  if (node.nodeType === Node.ELEMENT_NODE) {
    // Emphasize: this is an object, not an HTML tag string
    type.textContent = node.tagName;
    const bits = [];
    if (node.id) bits.push("#" + node.id);
    const classes = [...node.classList].filter((c) => c !== "dom-highlight");
    if (classes.length) bits.push("." + classes.join("."));
    meta.textContent = bits.join(" ") || "element";

    box.addEventListener("mouseenter", () => {
      node.classList.add("dom-highlight");
      box.classList.add("is-active");
    });
    box.addEventListener("mouseleave", () => {
      node.classList.remove("dom-highlight");
      box.classList.remove("is-active");
    });
  } else {
    box.classList.add("is-text");
    type.textContent = "Text";
    const preview = node.textContent.trim();
    meta.textContent =
      preview.length > 18 ? preview.slice(0, 16) + "…" : preview;
  }

  box.appendChild(type);
  box.appendChild(meta);
  return box;
}

/**
 * Classic top-down tree: each node is a square object box;
 * children sit in a row underneath with connector lines (CSS).
 */
function buildTreeBranch(node) {
  const li = document.createElement("li");
  li.appendChild(createObjectBox(node));

  const children = getMeaningfulChildren(node);
  if (children.length > 0) {
    const ul = document.createElement("ul");
    for (const child of children) {
      ul.appendChild(buildTreeBranch(child));
    }
    li.appendChild(ul);
  }

  return li;
}

function buildRootTree(element) {
  const ul = document.createElement("ul");
  ul.appendChild(buildTreeBranch(element));
  return ul;
}

treeRoot.appendChild(buildRootTree(pageContent));
