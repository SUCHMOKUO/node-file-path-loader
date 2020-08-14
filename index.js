const path = require("path");
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  let filename = path.basename(this.resourcePath);
  const extname = path.extname(filename);

  if (extname === ".ts") {
    filename = filename.replace(/\.[^.]+$/, ".js");
  }

  const outputPath = options.outputPath
    ? path.posix.join(options.outputPath, filename)
    : filename;

  this.emitFile(outputPath, content);

  return `
    const path = require("path");
    module.exports = path.resolve(__dirname, "${outputPath}");
  `;
};

module.exports.raw = true;
