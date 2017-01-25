'use strict'

const path = require('path')

const autoprefixer = require('autoprefixer')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: {
        title: 'My app',
        template: path.join(__dirname, '..', 'src', 'html', 'template.html')
  },

  standard: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard-loader'
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel-loader'
  },

  cssLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loaders: [
      'style-loader',
      'css-loader?sourceMap&modules!postcss-loader?sourceMap'
    ]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components'),
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  },

  postcss: [
     autoprefixer({browsers: ['> 0%', 'IE 7']}),
     cssnext({warnForDuplicates: false}),
     postcssImport()
  ]

}
