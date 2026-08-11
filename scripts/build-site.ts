// Builds the static, self-contained RideTrack site published to GitHub Pages.
//
// The Next.js app needs a Node server, a database and Google OAuth, so it
// cannot run on Pages. This build inlines the same park dataset and the fonts
// into a single HTML file that keeps your ride tracking in localStorage, so
// there is a public demo anyone can open without signing in.
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { parks } from "../prisma/seed-data";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const siteDir = path.join(root, "site");
const outDir = path.join(siteDir, "dist");

const dataUri = (file: string) =>
  `data:font/woff2;base64,${fs.readFileSync(path.join(siteDir, "fonts", file)).toString("base64")}`;

const FONTS: Record<string, string> = {
  "{{FONT_BUNGEE}}": "bungee-400.woff2",
  "{{FONT_MANROPE}}": "manrope-var.woff2",
  "{{FONT_MONO_400}}": "plexmono-400.woff2",
  "{{FONT_MONO_500}}": "plexmono-500.woff2",
  "{{FONT_MONO_600}}": "plexmono-600.woff2",
};

let html = fs.readFileSync(path.join(siteDir, "template.html"), "utf8");
for (const [token, file] of Object.entries(FONTS)) html = html.replace(token, dataUri(file));
html = html.replace("{{PARKS_JSON}}", JSON.stringify(parks));

const unresolved = html.match(/\{\{[A-Z_]+\}\}/g);
if (unresolved) throw new Error(`unresolved template tokens: ${[...new Set(unresolved)].join(", ")}`);

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), html);
// tell Pages not to run the output through Jekyll
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

const rides = parks.reduce((s, p) => s + p.rides.length, 0);
console.log(
  `site/dist/index.html — ${parks.length} parks, ${rides} rides, ${(html.length / 1024 / 1024).toFixed(2)}MB`
);
