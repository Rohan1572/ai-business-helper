'use strict';

const fs = require('fs');

function checkRequiredFiles(files) {
  const missingFiles = files.filter(file => !fs.existsSync(file));

  if (missingFiles.length > 0) {
    console.log('Could not find required files.');
    missingFiles.forEach(file => console.log(`- ${file}`));
    return false;
  }

  return true;
}

module.exports = checkRequiredFiles;
