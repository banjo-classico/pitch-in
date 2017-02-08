const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

const postCSSConfig = require('./postcss.config.js')

const target = process.env.TARGET || "http://localhost:3000";

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
           loader: 'css-loader',
           options: { sourceMap: true, modules: true, importLoaders: 1 }
          },
          {
           loader: 'postcss-loader',
            options: {
             sourceMap: true,
            plugins: postCSSConfig,
            },
          }
        ],
        exclude: /global\.css$/,
      },
      {
        test: /global\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    proxy: {
      '/api': {
        target,
        secure: true,
        host: target,
        changeOrigin: true,
      },
      '/token': {
        target,
        secure: true,
        host: target,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
      }
    }),
    new ModernizrWebpackPlugin({
      htmlWebpackPlugin: true,
      'feature-detects': [
        'inputtypes'
      ]
    })
  ],

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      "node_modules"
    ],
    extensions: ['.js', '.jsx']
  }
}
