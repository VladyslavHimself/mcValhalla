const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/dev/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
};