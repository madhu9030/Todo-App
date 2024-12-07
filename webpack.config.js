const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/, // Don't transpile node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add React preset
          },
        },
      },
      {
        test: /\.scss$/, // Matches .scss files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Resolves @import and url() like import/require() and turns them into valid modules
          'sass-loader',  // Compiles Sass to CSS
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Handle both .js and .jsx imports
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Use 'static' instead of 'contentBase'
    },
    port: 3000,
    open: true, // Optional: Opens the browser automatically
    hot: true, // Optional: Enables Hot Module Replacement (HMR)
    historyApiFallback: true, // Optional: For single-page apps (SPA), this ensures that routing works correctly
  },
};