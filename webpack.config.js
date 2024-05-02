const path = require('path');

module.exports = {
  mode: 'development', // Adjust to 'production' for deployment
  entry: './src/index.tsx', // Main entry point for your app
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'build'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Rule for TypeScript files
        use: 'babel-loader', // Use Babel loader for transpilation
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve file extensions
  },
};
