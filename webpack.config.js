'use strict'
/*
 * Base Webpack
 */
const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

/*
 * Plugins Webpack
 */
const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

/*
 * PostCSS Plugins
 */
const autoprefixer = require('autoprefixer')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const precss = require('precss')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin,

    new HtmlPlugin({
      title: 'My App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap&modules!postcss-loader?sourceMap'
      ]
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    }
  },

  postcss: [
    autoprefixer({browsers: ['> 0%', 'IE 7']}),
    cssnext(),
    postcssImport(),
    precss()
  ]
})
