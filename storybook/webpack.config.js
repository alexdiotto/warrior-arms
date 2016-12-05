'use strict'

const path = require('path')

/*
 * PostCSS Plugins
 */
const autoprefixer = require('autoprefixer')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const precss = require('precss')

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard'
    }],

    loaders: [{
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
    cssnext({warnForDuplicates: false}),
    postcssImport(),
    precss()
  ]
}
