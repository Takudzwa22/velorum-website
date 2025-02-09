const sharp = require('sharp');
const ico = require('ico-endec');
const fs = require('fs');

async function generateFavicon() {
  // Sizes needed for favicon.ico
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const size of sizes) {
    const buffer = await sharp('public/favicon.svg')
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers.push(buffer);
  }

  const icoBuffer = ico.encode(pngBuffers);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
}

generateFavicon().catch(console.error); 