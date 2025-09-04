#!/usr/bin/env node
/**
 * Generate GitBook SUMMARY.md from a JSON course structure.
 *
 * Usage:
 *   node generate-summary.mjs path/to/structure.json [--root <repo-root>] [--out SUMMARY.md] [--debug]
 */

import fs from "fs";
import path from "path";
import process from "process";

// ---------------- CLI ----------------
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    "Usage: node generate-summary.mjs path/to/structure.json [--root <repo-root>] [--out SUMMARY.md] [--debug]",
  );
  process.exit(1);
}

const jsonPath = path.resolve(args[0]);

// default root = current working directory (where script is executed)
let rootDir = process.cwd();
let outPath = null;
let debug = false;

for (let i = 1; i < args.length; i++) {
  if (args[i] === "--root" && args[i + 1]) {
    rootDir = path.resolve(args[++i]);
  } else if (args[i] === "--out" && args[i + 1]) {
    outPath = path.resolve(args[++i]);
  } else if (args[i] === "--debug") {
    debug = true;
  }
}
if (debug) {
  console.error(`[debug] jsonPath=${jsonPath}`);
  console.error(`[debug] rootDir=${rootDir}`);
}

// ---------------- Helpers ----------------
const toPosix = (p) => p.split(path.sep).join("/");
const posixJoin = (...parts) => toPosix(path.join(...parts));
const toPosixFromRoot = (absPath) => {
  const rel = path.relative(rootDir, absPath);
  return rel ? toPosix(rel) : ".";
};

const exists = (p) => {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const listDirents = (dir) =>
  exists(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
const listDirs = (dir) =>
  listDirents(dir)
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
const listFiles = (dir) =>
  listDirents(dir)
    .filter((d) => d.isFile())
    .map((d) => d.name);

function ensureReadmeLink(baseAbsDir, relPosix) {
  const candidate = path.join(baseAbsDir, "README.md");
  if (exists(candidate)) return posixJoin(relPosix, "README.md");
  return relPosix;
}

// Case-insensitive resolver
function resolveCaseInsensitive(absDir, wanted) {
  const exact = path.join(absDir, wanted);
  if (exists(exact)) return wanted;
  const files = listFiles(absDir);
  const lowerWanted = wanted.toLowerCase();
  const found = files.find((f) => f.toLowerCase() === lowerWanted);
  return found || null;
}

const WEEK_RE = /^week(\d+)$/i;
const weekNumber = (name) => {
  const m = WEEK_RE.exec(name);
  return m ? parseInt(m[1], 10) : null;
};

const indent = (level) => "  ".repeat(level);
const linkLine = (level, text, filePath) =>
  `${indent(level)}- ${filePath ? `[${text}](${filePath})` : text}`;

// ---------------- Core ----------------
function generateSummary(structure, rootDir) {
  if (!structure || !Array.isArray(structure.courses)) {
    throw new Error("Invalid structure JSON: expected { courses: [...] }");
  }

  const lines = [];

  for (const course of structure.courses) {
    if (!course?.name || !course?.location) continue;

    const courseAbs = path.resolve(rootDir, course.location);
    const courseRel = toPosixFromRoot(courseAbs);
    if (debug)
      console.error(
        `[debug] course="${course.name}" dir=${courseAbs} exists=${exists(courseAbs)}`,
      );
    const courseLink = ensureReadmeLink(courseAbs, courseRel);
    lines.push(linkLine(0, course.name, courseLink));

    const modules = Array.isArray(course.modules) ? course.modules : [];
    for (const module of modules) {
      if (!module?.name || !module?.location) continue;

      const modAbs = path.resolve(rootDir, module.location);
      const modRel = toPosixFromRoot(modAbs);
      if (debug)
        console.error(
          `  [debug] module="${module.name}" dir=${modAbs} exists=${exists(modAbs)}`,
        );
      const modLink = ensureReadmeLink(modAbs, modRel);
      lines.push(linkLine(1, module.name, modLink));

      // discover week folders
      const weekFolders = listDirs(modAbs)
        .map((d) => ({ name: d, num: weekNumber(d) }))
        .filter((w) => w.num !== null)
        .sort((a, b) => a.num - b.num);

      if (debug)
        console.error(
          `    [debug] weeks=${weekFolders.map((w) => w.name).join(", ") || "(none)"}`,
        );

      if (weekFolders.length > 0) {
        for (const w of weekFolders) {
          const weekAbs = path.join(modAbs, w.name);
          const weekRel = toPosixFromRoot(weekAbs);
          const weekTitle = `Week ${w.num}`;
          const weekLink = ensureReadmeLink(weekAbs, weekRel);
          lines.push(linkLine(2, weekTitle, weekLink));

          const files = [
            { title: "Preparation", file: "preparation.md" },
            { title: "Session Plan", file: "session-plan.md" },
            { title: "Assignment", file: "assignment.md" },
          ];

          for (const f of files) {
            const resolved = resolveCaseInsensitive(weekAbs, f.file);
            if (resolved) {
              const relF = posixJoin(weekRel, resolved);
              lines.push(linkLine(3, f.title, relF));
            } else if (debug) {
              console.error(
                `      [debug] missing file ${path.join(weekAbs, f.file)}`,
              );
            }
          }
        }
      } else {
        // fallback: no week dirs → check module root for session files
        const files = [
          { title: "Preparation", file: "preparation.md" },
          { title: "Session Plan", file: "session-plan.md" },
          { title: "Assignment", file: "assignment.md" },
        ];

        for (const f of files) {
          const resolved = resolveCaseInsensitive(modAbs, f.file);
          if (resolved) {
            const relF = posixJoin(modRel, resolved);
            lines.push(linkLine(2, f.title, relF));
          } else if (debug) {
            console.error(
              `    [debug] missing module-root file ${path.join(modAbs, f.file)}`,
            );
          }
        }
      }
    }
  }

  return lines.join("\n") + "\n";
}

// ---------------- Run ----------------
try {
  const raw = fs.readFileSync(jsonPath, "utf8");
  const structure = JSON.parse(raw);
  const md = generateSummary(structure, rootDir);

  if (outPath) {
    fs.writeFileSync(outPath, md, "utf8");
    console.log(`Wrote ${outPath}`);
  } else {
    process.stdout.write(md);
  }
} catch (err) {
  console.error("Error:", err.message);
  process.exit(1);
}
