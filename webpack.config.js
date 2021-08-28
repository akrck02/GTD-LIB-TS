
const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/javascript/app.js'),
    filename: 'gtd.js',
    libraryTarget: 'window',
  },
};