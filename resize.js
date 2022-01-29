const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const main = async () => {
  const files = fs.readdirSync('./images');
  console.log(files);

  const widths = [320, 640, 960];
  const tasks = files.flatMap((file, index) => {
    const input = path.join(__dirname, `images/${file}`);
    return widths.map(width => {
      const output = path.join(__dirname, `resized/w-gallery-${index}-${width}.webp`);
      return sharp(input).resize({ width }).webp({ lossless: true }).toFile(output);
    });
  });
  await Promise.all(tasks);
  console.log('Done!');
};
main();
