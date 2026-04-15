import sharp from "sharp";
import { readFileSync, statSync } from "fs";
import { resolve } from "path";

const PUBLIC = resolve(process.cwd(), "public");

const targets = [
  { src: "hero.jpg",    dest: "hero.webp",    maxWidth: 1920 },
  { src: "hero-sp.jpg", dest: "hero-sp.webp", maxWidth: 1400 },
];

for (const { src, dest, maxWidth } of targets) {
  const srcPath  = `${PUBLIC}/${src}`;
  const destPath = `${PUBLIC}/${dest}`;

  const srcSize = statSync(srcPath).size;

  await sharp(srcPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);

  const destSize = statSync(destPath).size;
  const reduction = (((srcSize - destSize) / srcSize) * 100).toFixed(1);

  console.log(
    `${src} (${(srcSize / 1024).toFixed(0)}KB) → ${dest} (${(destSize / 1024).toFixed(0)}KB)  -${reduction}%`
  );
}

console.log("\nDone. Original .jpg files are untouched.");
