const sharp = require('./node_modules/sharp');
const fs = require('fs');

const files = fs.readdirSync('public/images/gallery').filter(f => f.endsWith('.webp') && !f.includes('test'));

async function run() {
  for (const f of files) {
    const m = await sharp('public/images/gallery/' + f).metadata();
    console.log(f, m.width + 'x' + m.height, m.width < m.height ? 'PORTRAIT' : 'LANDSCAPE');
  }
}
run().catch(console.error);
