const fs = require('fs');
const path = require('path');

exports.convertFile = async (filePath, targetFormat) => {
  const raw = fs.readFileSync(filePath, 'utf8');
  const outputPath = path.join('downloads', `converted.${targetFormat}`);
  fs.writeFileSync(outputPath, raw); // For simplicity, dummy conversion
  return outputPath;
};
