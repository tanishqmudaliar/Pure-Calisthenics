const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const directories = [
  path.join(__dirname, "../public/images"),
  path.join(__dirname, "../public/logo"),
];

async function convertImages() {
  console.log("Starting WebP conversion...");
  let convertedCount = 0;

  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, `${path.parse(file).name}.webp`);

        // Check if output exists and is newer than input
        if (fs.existsSync(outputPath)) {
          const inputStat = fs.statSync(inputPath);
          const outputStat = fs.statSync(outputPath);
          if (outputStat.mtime >= inputStat.mtime) {
            console.log(`Skipping (already up to date): ${file}`);
            continue;
          }
        }

        const inputSize = fs.statSync(inputPath).size;
        console.log(`Converting: ${file} (${Math.round(inputSize / 1024)} KB)...`);

        await sharp(inputPath)
          .webp({ quality: 82, effort: 4 })
          .toFile(outputPath);

        const outputSize = fs.statSync(outputPath).size;
        const reduction = Math.round((1 - outputSize / inputSize) * 100);
        console.log(
          `✓ Converted: ${path.parse(file).name}.webp (${Math.round(
            outputSize / 1024
          )} KB, saved ${reduction}%)`
        );
        convertedCount++;
      }
    }
  }

  console.log(`\nWebP conversion finished! ${convertedCount} images processed.`);
}

convertImages().catch((err) => {
  console.error("Conversion error:", err);
  process.exit(1);
});
