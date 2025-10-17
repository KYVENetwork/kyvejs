const path = require('path');

module.exports = {
  mode: 'production', // or 'development' for easier debugging
  entry: {
    bundle: './dist/src/index.js',
    checksum: '../../common/protocol/dist/scripts/checksum.js',
  }, // your ESM output entry
  target: 'node', // for Node.js environment
  output: {
    path: path.resolve(__dirname, 'dist-cjs'),
    filename: '[name].js',
    libraryTarget: 'commonjs2', // CommonJS output
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      // Add loaders here if you need to transpile further (e.g. Babel)
    ],
  },
  experiments: {
    outputModule: false, // Ensure output is not as ESM module
  },
};
