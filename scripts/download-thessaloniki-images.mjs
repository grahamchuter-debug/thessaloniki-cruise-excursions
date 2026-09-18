#!/usr/bin/env node
/**
 * Download Thessaloniki / Ancient Macedonia images from Wikimedia Commons (CC-licensed).
 * Temporary localhost stand-ins — record sources in public/images/sources.json.
 */
import { writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA = "ThessalonikiCruiseExcursions/1.0 (https://thessalonikicruiseexcursions.com; localhost image setup)";

const IMAGE_FILES = {
  "hero.jpg": ["File:White Tower in Thessaloniki.jpg", "File:Waterfront of Thessaloniki.jpg"],
  "hero-home.jpg": ["File:White Tower in Thessaloniki.jpg"],
  "og-default.jpg": ["File:Aristotelous Plateia.jpg", "File:Cafes at Aristotelous Square, Thessaloniki.jpg"],
  "cruise-port.jpg": [
    "File:Greece Thessaloniki ThermaikosBay Boat AerialPicture 3 ISymeonidis.jpg",
    "File:Thessaloniki beach promenade.jpg",
  ],
  "historic.jpg": ["File:Arch of Galerius,Thessaloniki (2014).jpg", "File:Saint George Rotunda (Thessaloniki) - 3.jpg"],
  "walking.jpg": ["File:Cafes at Aristotelous Square, Thessaloniki.jpg", "File:Aristotelous Plateia.jpg"],
  "food-and-wine.jpg": ["File:Agora Modiano.jpg", "File:Thessaloniki Modiano Market.jpg"],
  "food.jpg": ["File:Agora Modiano.jpg"],
  "wine.jpg": ["File:Agora Modiano.jpg"],
  "coastal.jpg": ["File:Thessaloniki beach promenade.jpg", "File:Waterfront of Thessaloniki.jpg"],
  "coast.jpg": ["File:Thessaloniki beach promenade.jpg"],
  "nature.jpg": ["File:Roussanou Monastery, Meteora.jpg", "File:Upper town (Ano Poli) of Thessaloniki - panoramio.jpg"],
  "compare.jpg": ["File:Arch of Galerius (Rotonda in the background) - 2019.jpg"],
  "private.jpg": ["File:Tomb III Vergina.jpg", "File:Silver Calyx from the tomb of Philip II of Macedon at Aigai 336 BCE Vergina Greece.jpg"],
  "photography.jpg": ["File:Upper town (Ano Poli) of Thessaloniki - panoramio.jpg", "File:White Tower in Thessaloniki.jpg"],
  "family.jpg": ["File:Aristotelous Plateia.jpg", "File:Thessaloniki beach promenade.jpg"],
  "white-tower.jpg": ["File:White Tower in Thessaloniki.jpg"],
  "aristotelous.jpg": ["File:Aristotelous Plateia.jpg", "File:Cafes at Aristotelous Square, Thessaloniki.jpg"],
  "galerius.jpg": ["File:Arch of Galerius,Thessaloniki (2014).jpg"],
  "rotunda.jpg": ["File:Saint George Rotunda (Thessaloniki) - 3.jpg"],
  "ano-poli.jpg": ["File:Upper town (Ano Poli) of Thessaloniki - panoramio.jpg", "File:2006 July 30, Thessaloniki 32.jpg"],
  "vergina.jpg": [
    "File:Tomb III Vergina.jpg",
    "File:Silver Calyx from the tomb of Philip II of Macedon at Aigai 336 BCE Vergina Greece.jpg",
  ],
  "st-demetrios.jpg": ["File:Thessaloniki Church of Saint Demetrius front view.jpg"],
  "meteora.jpg": ["File:Roussanou Monastery, Meteora.jpg"],
  "pella.jpg": ["File:Dionysos on a cheetah, Pella, Greece.jpg", "File:Pella Museum -- Mosaic 02.jpg"],
  "viewpoints.jpg": ["File:Upper town (Ano Poli) of Thessaloniki - panoramio.jpg"],
  "waterfront.jpg": ["File:Thessaloniki beach promenade.jpg", "File:Waterfront of Thessaloniki.jpg"],
};

async function commonsThumbUrl(title, width = 2400) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveAndSave(filename, candidates) {
  for (const title of candidates) {
    try {
      const url = await commonsThumbUrl(title);
      if (!url) {
        console.warn(`  no url: ${title}`);
        continue;
      }
      const outPath = join(OUT, filename);
      const srcPath = join(SOURCE, filename);
      const bytes = await download(url, outPath);
      copyFileSync(outPath, srcPath);
      console.log(`✓ ${filename} ← ${title} (${Math.round(bytes / 1024)}KB)`);
      return title;
    } catch (err) {
      console.warn(`  fail ${title}: ${err.message}`);
    }
  }
  console.error(`✗ FAILED ${filename}`);
  return null;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SOURCE, { recursive: true });

const sources = {
  destination: "thessaloniki",
  generated: new Date().toISOString(),
  note: "Temporary Wikimedia Commons stand-ins for localhost development only. Replace before production. Do not use Italian Riviera leftovers.",
  images: [],
};

let ok = 0;
for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
  const used = await resolveAndSave(file, candidates);
  if (used) {
    ok++;
    sources.images.push({
      file,
      subject: used.replace(/^File:/, ""),
      source: "Wikimedia Commons",
      wikimedia: used.replace(/^File:/, ""),
      note: "Temporary localhost stand-in — replace with licensed production assets before launch",
    });
  }
}

writeFileSync(join(OUT, "sources.json"), JSON.stringify(sources, null, 2) + "\n");
console.log(`\nDownloaded ${ok}/${Object.keys(IMAGE_FILES).length} images`);
if (ok < Object.keys(IMAGE_FILES).length) process.exit(1);
