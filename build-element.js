const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  try {
    const files = [
      './dist/element1/runtime-es2015.js',
      './dist/element1/main-es2015.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/element.js');

  }
  catch (e) {
    console.log(e);
  }
})();