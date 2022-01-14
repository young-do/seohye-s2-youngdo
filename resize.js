const fs = require('fs');
const jimp = require('jimp');

const main = async () => {
  const files = fs.readdirSync('./images');
  console.log(files);

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const widths = [1280, 200];
    for (const width of widths) {
      // Read the image.
      const image = await jimp.read(`images/${file}`);

      // Resize the image to width 150 and auto height.
      await image.resize(width, jimp.AUTO);

      // Save and overwrite the image
      await image.writeAsync(`resized/gallery-${index}-${width}.jpg`);

      console.log(`resized ${file} to fit within width=${width}`);
    }
  }
};
main();
