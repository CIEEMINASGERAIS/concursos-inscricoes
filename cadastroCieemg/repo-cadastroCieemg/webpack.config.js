const path = require('path') //CommonJs
const webpack = require('webpack')

module.exports = {
  mode: 'development', //production
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'web', 'src', 'assets', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      "assert": require.resolve("assert"),
      "crypto": require.resolve("crypto-browserify"),
      "url": require.resolve("url/"),
      "util": require.resolve("util/"),
      "fs": false, // Isso pode precisar ser tratado separadamente
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    },
    alias: {
      process: 'process/browser',
      "buffer": "buffer"
    }
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            sourceType: 'module'
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ]
}
