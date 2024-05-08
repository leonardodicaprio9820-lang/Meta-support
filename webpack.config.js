const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', 
  entry: './src/index.tsx', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'build'), 
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: 'babel-loader', 
      },
      {
        test: /\.svg$/, 
        use: 'svg-loader' 
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader', 
          'css-loader',  
          'postcss-loader'  
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
      filename: 'index.html' 
    })
  ]
};
