#!/usr/bin/env node
/**
 * Build or split the accessibility home page.
 *
 * Build (default): Read HTML parts from public/accessibility-home-parts/
 * in order (00-*.html, 01-*.html, ...) and write public/accessibility-home.html.
 *
 * Split (--split): Read public/accessibility-home.html, split into parts
 * by section markers, and write part files. Run once to create parts from
 * the current full file.
 *
 * Usage:
 *   node scripts/build-accessibility-page.mjs           # build full page from parts
 *   node scripts/build-accessibility-page.mjs --split   # split full page into parts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const FULL_PATH = path.join(ROOT, "public", "accessibility-home.html");
const PARTS_DIR = path.join(ROOT, "public", "accessibility-home-parts");

/** Section boundaries: each marker is the start of a new part (the previous part ends just before it). */
const SPLIT_MARKERS = [
  { id: "rec392128445", name: "01-nav-and-hero" },
  { id: "rec392128449", name: "02-intro-and-key-guides" },
  { id: "rec392128454", name: "03-wcag-section" },
  { id: "rec392128455", name: "04-resources-and-rest" },
];

function build() {
  if (!fs.existsSync(PARTS_DIR)) {
    console.error("Parts directory not found: " + PARTS_DIR);
    console.error("Run with --split first to create parts from the current accessibility-home.html.");
    process.exit(1);
  }
  const files = fs.readdirSync(PARTS_DIR)
    .filter((f) => f.endsWith(".html"))
    .sort();
  if (files.length === 0) {
    console.error("No .html files in " + PARTS_DIR);
    process.exit(1);
  }
  const html = files
    .map((f) => fs.readFileSync(path.join(PARTS_DIR, f), "utf8"))
    .join("");
  fs.writeFileSync(FULL_PATH, html, "utf8");
  console.log("Built " + FULL_PATH + " from " + files.length + " parts.");
}

function split() {
  const html = fs.readFileSync(FULL_PATH, "utf8");
  const partNames = ["00-head-and-body-start", ...SPLIT_MARKERS.map((m) => m.name)];
  const indices = [];
  let start = 0;
  for (const marker of SPLIT_MARKERS) {
    const pattern = `<div id="${marker.id}"`;
    const idx = html.indexOf(pattern, start);
    if (idx === -1) {
      console.error("Marker not found: " + marker.id);
      process.exit(1);
    }
    indices.push(idx);
    start = idx;
  }

  const parts = [];
  for (let i = 0; i < partNames.length; i++) {
    const from = i === 0 ? 0 : indices[i - 1];
    const to = i < indices.length ? indices[i] : html.length;
    parts.push({ name: partNames[i], content: html.slice(from, to) });
  }

  fs.mkdirSync(PARTS_DIR, { recursive: true });
  for (const part of parts) {
    const filename = part.name + ".html";
    const filepath = path.join(PARTS_DIR, filename);
    fs.writeFileSync(filepath, part.content, "utf8");
    console.log("Wrote " + filename);
  }
  console.log("Split complete. Edit files in " + PARTS_DIR + ", then run build to regenerate " + path.basename(FULL_PATH) + ".");
}

const doSplit = process.argv.includes("--split");
if (doSplit) {
  split();
} else {
  build();
}
