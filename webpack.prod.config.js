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
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/*
 * PostCSS Plugins
 */
const autoprefixer = require('autoprefixer')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const precss = require('precss')

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new HtmlPlugin({
      title: 'My App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
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
      loader: ExtractTextPlugin.extract('style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }],
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
