const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "dragunov");
const outFile = path.join(__dirname, "dragunovTracks.json");

const files = fs
  .readdirSync(folder)
  .filter((f) => f.endsWith(".mp3") || f.endsWith(".m4a"));

const tracks = files.map((file, idx) => ({
  id: idx + 1,
  title: file.replace(/\.[^/.]+$/, ""),
  src: `/dragunov/${file}`,
  type: file.endsWith(".mp3") ? "audio/mp3" : "audio/m4a",
}));

fs.writeFileSync(outFile, JSON.stringify(tracks, null, 2));
console.log("Tracks file generated:", outFile);
