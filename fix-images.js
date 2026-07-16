const sharp = require('./node_modules/sharp');
const fs = require('fs');

// These images appear rotated (portrait but should be landscape based on visual check)
const toFix = [
  'diwali-2025-2.webp',  // was visually rotated
];

async function run() {
  for (const f of toFix) {
    const path = 'public/images/gallery/' + f;
    await sharp(path).rotate(90).toFile(path + '.tmp.webp');
    fs.renameSync(path + '.tmp.webp', path);
    console.log('Fixed:', f);
  }
}
run().catch(console.error);
